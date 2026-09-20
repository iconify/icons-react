import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xw8n86b0s.css';
import '../../css/d/d0uvv0b8z.css';
import '../../css/u/uhu1c0b3t.css';
import '../../css/h/hc3w1fb-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xw8n86b0s"/><path class="d0uvv0b8z"/><path class="uhu1c0b3t"/><path class="hc3w1fb-g"/></g>`,
		"fallback": "streamline-plump-color:video-subtitles",
	});
}

export default Component;
