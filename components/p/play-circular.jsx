import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_13nzbtl.css';
import '../../css/b/bu2_gqbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="q_13nzbtl"/><path class="bu2_gqbdo"/></g>`,
		"fallback": "proicons:play-circular",
	});
}

export default Component;
