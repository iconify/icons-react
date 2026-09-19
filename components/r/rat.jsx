import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d80-uvbqo.css';
import '../../css/m/m6vazfblz.css';
import '../../css/i/i9gwb9buy.css';
import '../../css/c/c7ynm7bfe.css';
import '../../css/x/xct15nbbj.css';
import '../../css/s/spmz62mjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d80-uvbqo"/><path class="m6vazfblz"/><path class="i9gwb9buy"/><path class="c7ynm7bfe"/><path class="xct15nbbj"/><path class="spmz62mjv"/>`,
		"fallback": "fxemoji:rat",
	});
}

export default Component;
