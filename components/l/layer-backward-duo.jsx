import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i36v6ohrk.css';
import '../../css/t/tj541585v.css';
import '../../css/c/c78_xksqc.css';
import '../../css/s/se4lfetdc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i36v6ohrk"/><path class="tj541585v"/><path class="c78_xksqc"/><path class="se4lfetdc"/></g>`,
		"fallback": "glyphs:layer-backward-duo",
	});
}

export default Component;
