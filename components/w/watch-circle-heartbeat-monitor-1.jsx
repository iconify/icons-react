import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/opi0fac7l.css';
import '../../css/r/rq8bxjnsx.css';
import '../../css/e/e533k2olw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="opi0fac7l"/><path class="rq8bxjnsx"/><path class="e533k2olw"/></g>`,
		"fallback": "streamline:watch-circle-heartbeat-monitor-1",
	});
}

export default Component;
