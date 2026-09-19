import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck5l6tb3a.css';
import '../../css/t/tx2p9khav.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck5l6tb3a"/><path class="tx2p9khav"/>`,
		"fallback": "cil:people",
	});
}

export default Component;
