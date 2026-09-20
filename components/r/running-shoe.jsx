import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pttts2brz.css';
import '../../css/i/iyptj4bkz.css';
import '../../css/e/erbopzbav.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/gwtzy197j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGqFuOebbv" class="pttts2brz"/></defs><path class="iyptj4bkz"/><path class="erbopzbav"/><g class="ij2x_72vy"><use href="#SVGqFuOebbv"/><path class="gwtzy197j"/><use href="#SVGqFuOebbv"/></g>`,
		"fallback": "openmoji:running-shoe",
	});
}

export default Component;
