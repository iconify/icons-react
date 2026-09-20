import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vlrs3_buq.css';
import '../../css/m/mm_ycbb5m.css';
import '../../css/c/cyc_5oaic.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vlrs3_buq"/><path class="mm_ycbb5m"/><path class="cyc_5oaic"/></g>`,
		"fallback": "streamline-flex:visual-blind-1",
	});
}

export default Component;
