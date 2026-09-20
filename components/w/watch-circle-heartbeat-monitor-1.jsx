import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ed0kbfxln.css';
import '../../css/u/u8mo14blf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ed0kbfxln"/><path class="u8mo14blf"/></g>`,
		"fallback": "streamline-flex:watch-circle-heartbeat-monitor-1",
	});
}

export default Component;
