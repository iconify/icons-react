import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk064txyy.css';
import '../../css/j/jz4ibqfjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nk064txyy"/><path class="jz4ibqfjc"/>`,
		"fallback": "selfhst:our-shopping-list-light",
	});
}

export default Component;
