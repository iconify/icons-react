import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/x/xwqlguw3x.css';
import '../../css/p/pn1ylfbdq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="xwqlguw3x"/><path class="pn1ylfbdq"/></g>`,
		"fallback": "catppuccin:ms-excel",
	});
}

export default Component;
