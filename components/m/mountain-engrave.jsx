import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/epdtjoz-k.css';
import '../../css/s/sg2ba8_yc.css';
import '../../css/l/lu45pfb1y.css';
import '../../css/z/z2v1f6pmt.css';
import '../../css/t/tzhzk2bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="epdtjoz-k wm-k"/><path class="sg2ba8_yc wm-a"/><path class="lu45pfb1y wm-shadow"/><path class="wm-k z2v1f6pmt"/><path class="tzhzk2bji wm-a"/></g>`,
		"fallback": "withicons:mountain-engrave",
	});
}

export default Component;
