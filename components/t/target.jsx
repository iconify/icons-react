import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3d3g4b4z.css';
import '../../css/s/sjnwlgb-x.css';
import '../../css/f/ff54ufbyq.css';
import '../../css/w/wrgkcbcge.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i3d3g4b4z"/><path class="sjnwlgb-x"/><path class="ff54ufbyq"/><path class="wrgkcbcge"/></g>`,
		"fallback": "streamline-color:target",
	});
}

export default Component;
