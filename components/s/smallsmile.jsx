import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhpyq2aym.css';
import '../../css/r/rn-77lb9d.css';
import '../../css/a/a3231w_fi.css';
import '../../css/c/c84h_ebmd.css';
import '../../css/a/ab42i4bbh.css';
import '../../css/q/qv7b_0bre.css';
import '../../css/r/ric5fmb7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhpyq2aym"/><path class="rn-77lb9d"/><path class="a3231w_fi"/><path class="c84h_ebmd"/><path class="ab42i4bbh"/><path class="qv7b_0bre"/><path class="ric5fmb7q"/>`,
		"fallback": "fxemoji:smallsmile",
	});
}

export default Component;
