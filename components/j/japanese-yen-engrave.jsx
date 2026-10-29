import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m7basdqha.css';
import '../../css/y/yvyzj29rj.css';
import '../../css/o/opu4f6b7x.css';
import '../../css/m/m28cpcovm.css';
import '../../css/o/oceiybcet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m7basdqha wm-k"/><path class="wm-a yvyzj29rj"/><path class="opu4f6b7x wm-shadow"/><path class="m28cpcovm wm-k"/><path class="oceiybcet wm-a"/></g>`,
		"fallback": "withicons:japanese-yen-engrave",
	});
}

export default Component;
