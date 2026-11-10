import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o76ngqbah.css';
import '../../css/j/j1sln3vkx.css';
import '../../css/y/y-qnxyb5x.css';
import '../../css/j/jcnvp7bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o76ngqbah"/><path class="j1sln3vkx"/><path class="y-qnxyb5x"/><path class="jcnvp7bem"/></g>`,
		"fallback": "andrsrxn:unlock",
	});
}

export default Component;
