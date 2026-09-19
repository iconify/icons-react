import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z50iju6nu.css';
import '../../css/c/c0_f0wk1b.css';
import '../../css/n/ndglnmbdy.css';
import '../../css/l/l8q2qeo1i.css';
import '../../css/l/ldhbjhmee.css';
import '../../css/b/b73bp1bqj.css';
import '../../css/i/iv4n0tb3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z50iju6nu"/><path class="c0_f0wk1b"/><path class="ndglnmbdy"/><path class="l8q2qeo1i"/><path class="ldhbjhmee"/><path class="b73bp1bqj"/><path class="iv4n0tb3q"/>`,
		"fallback": "fxemoji:sailboat",
	});
}

export default Component;
