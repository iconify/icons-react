import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6aemob4c.css';
import '../../css/u/up_badc_u.css';
import '../../css/o/ox0clxb9k.css';
import '../../css/c/cz2k64bqx.css';
import '../../css/t/t9slonhaf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6aemob4c"/><path class="up_badc_u"/><path class="ox0clxb9k"/><marker id="SVG1yOGzeCz" markerHeight="30" markerWidth="30"><path class="cz2k64bqx"/></marker><path marker-mid="url(#SVG1yOGzeCz)" class="t9slonhaf"/>`,
		"fallback": "flag:us-1x1",
	});
}

export default Component;
