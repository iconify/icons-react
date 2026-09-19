import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvxyd6bas.css';
import '../../css/u/uey765bln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvxyd6bas"/><path class="uey765bln"/>`,
		"fallback": "fxemoji:sidewaysleftpointingindex",
	});
}

export default Component;
