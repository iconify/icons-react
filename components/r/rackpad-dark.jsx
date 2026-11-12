import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dedb0yb3v.css';
import '../../css/p/ps0tp4fxx.css';
import '../../css/s/s2cmtxptk.css';
import '../../css/t/tz3w3ibkq.css';
import '../../css/q/qwa522b1d.css';
import '../../css/e/evkrbd45m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dedb0yb3v"/><path class="ps0tp4fxx"/><path class="s2cmtxptk"/><path class="tz3w3ibkq"/><path class="qwa522b1d"/><path class="evkrbd45m"/>`,
		"fallback": "selfhst:rackpad-dark",
	});
}

export default Component;
