import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dnbhk4hpf.css';
import '../../css/v/v02e055sl.css';
import '../../css/u/u4139acbk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dnbhk4hpf"/><path class="v02e055sl"/><path class="u4139acbk"/></g>`,
		"fallback": "streamline-flex:passport-globe",
	});
}

export default Component;
