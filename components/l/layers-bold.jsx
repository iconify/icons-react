import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo0l9j9lh.css';
import '../../css/n/nk-dx3faz.css';
import '../../css/q/ql2i1fbyo.css';
import '../../css/e/eusfa-1-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo0l9j9lh"/><path clip-rule="evenodd" class="nk-dx3faz"/><path class="ql2i1fbyo"/><path class="eusfa-1-o"/>`,
		"fallback": "solar:layers-bold",
	});
}

export default Component;
