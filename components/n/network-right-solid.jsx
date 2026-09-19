import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjewqbtyv.css';
import '../../css/b/b0hlurj5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect transform="matrix(0 -1 -1 0 22 21)" class="wjewqbtyv"/><rect transform="matrix(0 -1 -1 0 7 15.5)" class="wjewqbtyv"/><rect transform="matrix(0 -1 -1 0 22 10)" class="wjewqbtyv"/><path class="b0hlurj5v"/></g>`,
		"fallback": "iconoir:network-right-solid",
	});
}

export default Component;
