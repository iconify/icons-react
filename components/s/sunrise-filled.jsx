import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn8bx52jh.css';
import '../../css/h/hidu0kbkq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn8bx52jh"/><path class="hidu0kbkq"/>`,
		"fallback": "ix:sunrise-filled",
	});
}

export default Component;
