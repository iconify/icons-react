import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/z/zrj9k7beb.css';
import '../../css/k/kzlh6plxa.css';
import '../../css/v/vbbqqbcjq.css';
import '../../css/a/a2sy6craw.css';
import '../../css/d/d0btybclt.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path class="zrj9k7beb"/><path clip-rule="evenodd" class="kzlh6plxa"/><path class="vbbqqbcjq"/><path clip-rule="evenodd" class="a2sy6craw"/><path clip-rule="evenodd" class="d0btybclt"/></g>`,
		"fallback": "flagpack:lr",
	});
}

export default Component;
