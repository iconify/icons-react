import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ptdw1e09f.css';
import '../../css/q/q5mhbjb1t.css';
import '../../css/r/r9zsy3bzc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ptdw1e09f"/><path class="q5mhbjb1t"/><path class="r9zsy3bzc"/></g>`,
		"fallback": "streamline-flex:rocket",
	});
}

export default Component;
