import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/t/twvsdh6gv.css';
import '../../css/w/w51lipyhi.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/z/zhj0oyzae.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVGH4d9vd6n)"><path class="twvsdh6gv"/><path class="w51lipyhi"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVGH4d9vd6n"><path class="zhj0oyzae"/></clipPath></defs></g>`,
		"fallback": "skill-icons:npm-dark",
	});
}

export default Component;
