import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k019gefpc.css';
import '../../css/f/flgqqpfqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k019gefpc"/><path class="flgqqpfqx"/>`,
		"fallback": "fxemoji:raisedfist",
	});
}

export default Component;
