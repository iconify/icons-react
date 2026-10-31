import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bzj1oubop.css';
import '../../css/t/tazztl59k.css';
import '../../css/n/nus-wqbbu.css';
import '../../css/o/ouemy9ohd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bzj1oubop wm-shadow"/><path class="tazztl59k wm-shadow"/><path class="nus-wqbbu"/><path class="ouemy9ohd"/></g>`,
		"fallback": "withicons-brutal:tree-deciduous",
	});
}

export default Component;
