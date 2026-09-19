import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zeggah3kn.css';
import '../../css/p/pfa780btb.css';
import '../../css/v/vvwsy1zbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zeggah3kn"/><path class="pfa780btb"/><path class="vvwsy1zbp"/></g>`,
		"fallback": "iconoir:pokeball",
	});
}

export default Component;
