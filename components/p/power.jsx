import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u51_pobvc.css';
import '../../css/z/zg15yprkt.css';
import '../../css/m/mo69_0lat.css';
import '../../css/l/lmh6p_b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u51_pobvc wm-shadow"/><path class="wm-shadow zg15yprkt"/><path class="mo69_0lat"/><path class="lmh6p_b7g"/></g>`,
		"fallback": "withicons-brutal:power",
	});
}

export default Component;
