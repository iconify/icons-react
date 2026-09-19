import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyotg7boe.css';
import '../../css/q/qjiswcnpz.css';
import '../../css/c/c7qi-k3vh.css';
import '../../css/f/f-dpfubrw.css';
import '../../css/l/lbcawvshy.css';
import '../../css/j/j70q6wn7p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyotg7boe"/><path class="qjiswcnpz"/><path class="c7qi-k3vh"/><ellipse transform="rotate(45.001 35.977 9.37)" class="f-dpfubrw"/><path class="lbcawvshy"/><circle class="j70q6wn7p"/>`,
		"fallback": "fxemoji:lipstick",
	});
}

export default Component;
