import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l-hunubkq.css';
import '../../css/i/iha_2f5_x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l-hunubkq"/><path class="iha_2f5_x"/></g>`,
		"fallback": "streamline-flex:stopwatch",
	});
}

export default Component;
