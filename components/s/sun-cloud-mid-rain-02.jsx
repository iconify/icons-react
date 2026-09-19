import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vl0fp_s-i.css';
import '../../css/c/cns1e8f3x.css';
import '../../css/o/osfo8-b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vl0fp_s-i"/><path class="cns1e8f3x"/><path class="osfo8-b1f"/></g>`,
		"fallback": "hugeicons:sun-cloud-mid-rain-02",
	});
}

export default Component;
