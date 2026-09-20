import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qd_1w_bij.css';
import '../../css/p/p735-fm4x.css';
import '../../css/z/z9i4rfbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qd_1w_bij"/><path class="p735-fm4x"/><path class="z9i4rfbjq"/></g>`,
		"fallback": "keyline-icons:tablet-vertical-sharp-two-tone",
	});
}

export default Component;
