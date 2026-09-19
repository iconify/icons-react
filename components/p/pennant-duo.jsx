import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiwb_quuo.css';
import '../../css/k/kk7_s9bwh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iiwb_quuo"/><path class="kk7_s9bwh"/></g>`,
		"fallback": "glyphs:pennant-duo",
	});
}

export default Component;
