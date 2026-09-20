import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ykesj6ubi.css';
import '../../css/v/v421rfj_n.css';
import '../../css/i/iye25pbua.css';
import '../../css/r/rd04jr-sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ykesj6ubi"/><path class="v421rfj_n"/><path class="iye25pbua"/><path class="rd04jr-sc"/></g>`,
		"fallback": "streamline-ultimate:single-man-vintage-tv",
	});
}

export default Component;
