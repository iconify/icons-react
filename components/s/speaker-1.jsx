import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s4_6trqjk.css';
import '../../css/b/bv0e1xbkk.css';
import '../../css/a/a7w5iie1m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s4_6trqjk"/><path class="bv0e1xbkk"/><path class="a7w5iie1m"/></g>`,
		"fallback": "streamline-flex:speaker-1",
	});
}

export default Component;
