import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz-xe4l0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz-xe4l0u"/>`,
		"fallback": "selfhst:tolgee-light",
	});
}

export default Component;
