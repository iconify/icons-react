import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hel--1b4n.css';
import '../../css/i/ikc81cb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hel--1b4n"/><path class="ikc81cb6r"/></g>`,
		"fallback": "solar:list-down-minimalistic-bold",
	});
}

export default Component;
