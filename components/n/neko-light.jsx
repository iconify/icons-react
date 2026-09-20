import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl4ov37_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl4ov37_n"/>`,
		"fallback": "selfhst:neko-light",
	});
}

export default Component;
