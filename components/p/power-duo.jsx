import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2hw-90mh.css';
import '../../css/a/av4yftz3s.css';
import '../../css/k/kflqzp9pq.css';
import '../../css/n/n8ojx_bpf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2hw-90mh"/><path class="av4yftz3s"/><path class="kflqzp9pq"/><path class="n8ojx_bpf"/></g>`,
		"fallback": "glyphs:power-duo",
	});
}

export default Component;
