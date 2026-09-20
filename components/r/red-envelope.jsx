import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgipdnc5u.css';
import '../../css/i/i4frfbcyn.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/d/d42vjib_a.css';
import '../../css/p/pg1evwkql.css';
import '../../css/r/rh94hzf6s.css';
import '../../css/f/fl8vgrb-u.css';
import '../../css/a/anm1zeqqj.css';
import '../../css/h/h0s-0jx8q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgipdnc5u"/><circle class="i4frfbcyn"/><g class="to5_hpm1w"><g class="c-zrgpb5l"><path class="d42vjib_a"/><path class="pg1evwkql"/></g><g class="rh94hzf6s"><circle class="fl8vgrb-u"/><path class="anm1zeqqj"/></g><path class="h0s-0jx8q"/></g>`,
		"fallback": "openmoji:red-envelope",
	});
}

export default Component;
