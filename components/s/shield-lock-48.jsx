import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lld64mb1j.css';
import '../../css/i/it1d66trk.css';
import '../../css/k/k57p5ac6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lld64mb1j"/><path class="it1d66trk"/><path class="k57p5ac6j"/>`,
		"fallback": "energy-icons:shield-lock-48",
	});
}

export default Component;
