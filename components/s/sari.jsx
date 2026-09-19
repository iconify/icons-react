import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbvkg5flj.css';
import '../../css/f/fafqcxb4y.css';
import '../../css/h/hrzf_8aqk.css';
import '../../css/h/he-j--bth.css';
import '../../css/q/qtyvufbuv.css';
import '../../css/e/ec3cphbka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbvkg5flj"/><path class="fafqcxb4y"/><path class="hrzf_8aqk"/><path class="he-j--bth"/><path class="qtyvufbuv"/><path class="ec3cphbka"/></g>`,
		"fallback": "fluent-emoji-flat:sari",
	});
}

export default Component;
