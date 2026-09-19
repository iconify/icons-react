import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqxt5abhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqxt5abhc"/>`,
		"fallback": "iconamoon:player-previous",
	});
}

export default Component;
