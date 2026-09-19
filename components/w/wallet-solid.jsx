import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w3oqkrbph.css';
import '../../css/c/cmbuwe6dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w3oqkrbph"/><path class="cmbuwe6dg"/></g>`,
		"fallback": "flowbite:wallet-solid",
	});
}

export default Component;
