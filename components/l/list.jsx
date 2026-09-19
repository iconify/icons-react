import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn2r_k_3k.css';
import '../../css/t/tng0ocbay.css';
import '../../css/w/wk855qbpc.css';
import '../../css/c/csbi0o7qk.css';

const viewBox = {"width":16,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tn2r_k_3k"/><circle class="tng0ocbay"/><circle class="wk855qbpc"/><path class="csbi0o7qk"/>`,
		"fallback": "formkit:list",
	});
}

export default Component;
