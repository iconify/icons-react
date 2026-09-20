import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jjj8m_bpx.css';
import '../../css/t/tz2r6xb1s.css';
import '../../css/e/etow-acuw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jjj8m_bpx"/><path class="tz2r6xb1s"/><path class="etow-acuw"/></g>`,
		"fallback": "streamline-flex:walker",
	});
}

export default Component;
