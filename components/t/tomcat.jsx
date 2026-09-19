import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auwgqsius.css';
import '../../css/h/htm7dsofo.css';
import '../../css/z/z2kxi1b5q.css';
import '../../css/n/nq-vd51mu.css';
import '../../css/a/adv5sl5sz.css';
import '../../css/f/f_j9ljbfk.css';
import '../../css/l/l329fns3p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auwgqsius"/><path class="htm7dsofo"/><path class="z2kxi1b5q"/><path class="nq-vd51mu"/><path class="adv5sl5sz"/><path class="f_j9ljbfk"/><path class="l329fns3p"/>`,
		"fallback": "devicon:tomcat",
	});
}

export default Component;
