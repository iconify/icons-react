import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxcix4bwn.css';
import '../../css/l/ltk4tpqua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxcix4bwn"/><path class="ltk4tpqua"/>`,
		"fallback": "cil:speech",
	});
}

export default Component;
