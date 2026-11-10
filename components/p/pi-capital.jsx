import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ng6-m7bga.css';
import '../../css/f/fvsc52n_o.css';
import '../../css/u/u-smc2b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ng6-m7bga"/><path class="fvsc52n_o"/><path class="u-smc2b1w"/></g>`,
		"fallback": "matita:pi-capital",
	});
}

export default Component;
