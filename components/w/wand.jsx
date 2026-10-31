import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gtnwvtbqj.css';
import '../../css/q/qyz3c_bqy.css';
import '../../css/r/rk2r9-bbi.css';
import '../../css/q/qtdkd5bib.css';
import '../../css/z/z5nhwrbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gtnwvtbqj wm-shadow"/><path class="qyz3c_bqy wm-shadow"/><path class="rk2r9-bbi"/><path class="qtdkd5bib"/><path class="z5nhwrbnt"/></g>`,
		"fallback": "withicons-brutal:wand",
	});
}

export default Component;
