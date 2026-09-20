import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/ufb6kdbct.css';
import '../../css/o/ois1sobwm.css';
import '../../css/w/w3m23pulh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ufb6kdbct"/><path class="ois1sobwm"/><path class="w3m23pulh"/></g>`,
		"fallback": "marketeq:microphone-music-2",
	});
}

export default Component;
