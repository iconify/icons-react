import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g__iqeb2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g__iqeb2t"/>`,
		"fallback": "selfhst:khoj-light",
	});
}

export default Component;
