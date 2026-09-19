import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_g6_lbbk.css';
import '../../css/g/guoy00ruz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_g6_lbbk"/><path class="guoy00ruz"/>`,
		"fallback": "devicon:stackoverflow",
	});
}

export default Component;
