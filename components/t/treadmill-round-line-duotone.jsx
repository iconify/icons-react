import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/x/xvu4zsr_t.css';
import '../../css/a/a7fuovaen.css';
import '../../css/y/yse-k_tnb.css';
import '../../css/c/csn8e4bgx.css';
import '../../css/q/q0799i8_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="xvu4zsr_t"/><path class="a7fuovaen"/><path class="yse-k_tnb"/><path class="csn8e4bgx"/><path class="q0799i8_d"/></g>`,
		"fallback": "solar:treadmill-round-line-duotone",
	});
}

export default Component;
