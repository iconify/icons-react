import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pid283b7d.css';
import '../../css/l/lrnzp1xwz.css';
import '../../css/i/i3bw0zupj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pid283b7d"/><path class="lrnzp1xwz"/><path class="i3bw0zupj"/></g>`,
		"fallback": "streamline-color:music-note-off-2",
	});
}

export default Component;
