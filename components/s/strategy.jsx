import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2fyg-bak.css';
import '../../css/n/ntti4oblh.css';
import '../../css/t/tyipu5qec.css';
import '../../css/v/v7i2g-bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="b2fyg-bak"/><circle class="ntti4oblh"/><path class="tyipu5qec"/><path class="v7i2g-bzf"/></g>`,
		"fallback": "andrsrxn:strategy",
	});
}

export default Component;
