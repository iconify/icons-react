import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj_o52bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj_o52bte"/>`,
		"fallback": "iconoir:voice-square",
	});
}

export default Component;
