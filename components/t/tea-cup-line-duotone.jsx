import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ouxnxxbew.css';
import '../../css/z/zyfwq-cof.css';
import '../../css/v/vt66uhuda.css';
import '../../css/p/pb4cfin7z.css';
import '../../css/e/eo0ysob7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ouxnxxbew"/><path class="zyfwq-cof"/><path class="vt66uhuda"/><path class="pb4cfin7z"/><path class="eo0ysob7e"/></g>`,
		"fallback": "solar:tea-cup-line-duotone",
	});
}

export default Component;
