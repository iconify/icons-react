import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rap11obza.css';
import '../../css/p/pp3v195nj.css';
import '../../css/g/ga7t0girt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rap11obza"/><circle class="pp3v195nj"/><path class="ga7t0girt"/></g>`,
		"fallback": "solar:passport-minimalistic-linear",
	});
}

export default Component;
