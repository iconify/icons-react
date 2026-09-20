import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddn_7b-3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddn_7b-3k"/>`,
		"fallback": "pixelarticons:square-cursor",
	});
}

export default Component;
