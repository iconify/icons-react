import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx3q3ccpo.css';
import '../../css/v/v4h1cqbwn.css';
import '../../css/a/a-1j1xy1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dx3q3ccpo"/><path class="v4h1cqbwn"/><path clip-rule="evenodd" class="a-1j1xy1j"/></g>`,
		"fallback": "griddy-icons:tractor",
	});
}

export default Component;
