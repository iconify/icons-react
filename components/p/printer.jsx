import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tnfl38b_n.css';
import '../../css/c/cpkh16lmf.css';
import '../../css/r/r2v1z7b5b.css';
import '../../css/y/ym90cebqs.css';
import '../../css/u/u5sq7obba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tnfl38b_n wm-shadow"/><path class="cpkh16lmf wm-shadow"/><path class="r2v1z7b5b"/><path class="ym90cebqs"/><path class="u5sq7obba"/></g>`,
		"fallback": "withicons-brutal:printer",
	});
}

export default Component;
