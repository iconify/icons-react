import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxvslsb9s.css';
import '../../css/i/i_walxiea.css';
import '../../css/j/jjvjtmj3d.css';
import '../../css/f/fgcyq-b7r.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fjt55e0uz.css';
import '../../css/o/ol5kdxbzl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxvslsb9s"/><path class="i_walxiea"/><path class="jjvjtmj3d"/><path class="fgcyq-b7r"/><g class="ij2x_72vy"><path class="fjt55e0uz"/><path class="ol5kdxbzl"/></g>`,
		"fallback": "openmoji:stadium",
	});
}

export default Component;
