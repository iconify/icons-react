import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyr2jybbi.css';
import '../../css/c/cu-wwpbhr.css';
import '../../css/u/una0uy64j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyr2jybbi"/><path class="cu-wwpbhr"/><path class="una0uy64j"/>`,
		"fallback": "fxemoji:squaredcl",
	});
}

export default Component;
