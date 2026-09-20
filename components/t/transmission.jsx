import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvbg1fz3a.css';
import '../../css/b/byjp5ys0b.css';
import '../../css/b/b5czk55zq.css';
import '../../css/g/g8tbddctr.css';
import '../../css/u/udxa4tbiz.css';
import '../../css/l/l8dv9b57m.css';
import '../../css/a/a4ny98emw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hvbg1fz3a"/><path class="byjp5ys0b"/><g class="b5czk55zq"><path class="g8tbddctr"/><circle class="udxa4tbiz"/><path class="l8dv9b57m"/><path class="a4ny98emw"/></g>`,
		"fallback": "openmoji:transmission",
	});
}

export default Component;
