import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/l_exppbta.css';
import '../../css/w/w35ps18xb.css';
import '../../css/r/rddduccbc.css';
import '../../css/y/y4p5pqbqv.css';
import '../../css/u/u7axzbbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="l_exppbta"/><path class="w35ps18xb"/><path class="rddduccbc"/><path class="y4p5pqbqv"/><path class="u7axzbbsm"/></g>`,
		"fallback": "matita:protractor",
	});
}

export default Component;
