import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_ny91ct.css';
import '../../css/m/mmbmrn-5f.css';
import '../../css/l/lsk97ge1c.css';
import '../../css/n/nnwrxnbkc.css';
import '../../css/u/uci823paf.css';

const viewBox = {"width":100,"height":100.026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc_ny91ct"/><path class="mmbmrn-5f"/><path class="lsk97ge1c"/><path class="nnwrxnbkc"/><path class="uci823paf"/>`,
		"fallback": "flat-ui:key",
	});
}

export default Component;
