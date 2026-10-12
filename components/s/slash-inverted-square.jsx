import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu-tuu-sv.css';
import '../../css/c/ccjm19bqx.css';
import '../../css/t/tgmbnfbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 2.65 2.8)" class="bu-tuu-sv"/><rect transform="matrix(0 1 1 0 2.65 2.8)" class="ccjm19bqx"/><path class="tgmbnfbzf"/></g>`,
		"fallback": "andrsrxn:slash-inverted-square",
	});
}

export default Component;
