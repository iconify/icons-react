import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/q/qq7mu7b4a.css';
import '../../css/i/ippgamhud.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="qq7mu7b4a"/><path class="ippgamhud"/></g>`,
		"fallback": "system-uicons:reset-forward",
	});
}

export default Component;
