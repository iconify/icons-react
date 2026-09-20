import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys5zogbxw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys5zogbxw"/>`,
		"fallback": "selfhst:paperclip-ai-light",
	});
}

export default Component;
