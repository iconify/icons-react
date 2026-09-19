import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uzrxt9cks.css';
import '../../css/n/nbr52gbso.css';
import '../../css/h/h-ecn2bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uzrxt9cks"/><path class="nbr52gbso"/><path class="h-ecn2bgl"/></g>`,
		"fallback": "iconoir:remove-pin-alt",
	});
}

export default Component;
