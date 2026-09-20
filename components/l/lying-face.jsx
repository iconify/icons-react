import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/w/w2zhnybnk.css';
import '../../css/a/a9u9cvm6j.css';
import '../../css/d/d79gy2v4r.css';
import '../../css/u/u2srbijvg.css';
import '../../css/t/tdhzq11dq.css';
import '../../css/e/eyqn6lbob.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="w2zhnybnk"/><path class="a9u9cvm6j"/></g><path class="d79gy2v4r"/><path class="u2srbijvg"/><path class="tdhzq11dq"/><path class="eyqn6lbob"/>`,
		"fallback": "openmoji:lying-face",
	});
}

export default Component;
