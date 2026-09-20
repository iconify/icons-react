import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi_-236it.css';
import '../../css/h/h5rfeh34x.css';
import '../../css/n/n0pislbfp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi_-236it"/><path class="h5rfeh34x"/><path class="n0pislbfp"/></g>`,
		"fallback": "streamline-flex-color:watch-circle-heartbeat-monitor-1-flat",
	});
}

export default Component;
