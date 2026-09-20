import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbdd1cnaq.css';
import '../../css/m/mh9pab2vb.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/q8062d63j.css';
import '../../css/w/w_2-6s5zz.css';
import '../../css/a/aul8037bl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbdd1cnaq"/><path class="mh9pab2vb"/><g class="x8poo_bjf"><path class="q8062d63j"/><path class="w_2-6s5zz"/><path class="aul8037bl"/></g>`,
		"fallback": "openmoji:love-letter",
	});
}

export default Component;
