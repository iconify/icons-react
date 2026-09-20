import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thcjvmb9x.css';
import '../../css/l/l2ri-gbnp.css';
import '../../css/z/zkxi6bboz.css';
import '../../css/r/rz2qodbyj.css';
import '../../css/t/t2oa5nb1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thcjvmb9x"><path class="l2ri-gbnp"/><path class="zkxi6bboz"/><path class="rz2qodbyj"/><path class="t2oa5nb1m"/></g>`,
		"fallback": "thesvg-color:openrouter-dark",
	});
}

export default Component;
