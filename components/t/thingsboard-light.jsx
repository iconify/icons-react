import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgow5u3ic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgow5u3ic"/>`,
		"fallback": "selfhst:thingsboard-light",
	});
}

export default Component;
