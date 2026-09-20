import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qh8fzpb3v.css';
import '../../css/p/p2if9abwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qh8fzpb3v"/><path class="p2if9abwy"/></g>`,
		"fallback": "streamline-freehand:power-supply-battery-charge",
	});
}

export default Component;
