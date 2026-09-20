import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqft0zboq.css';
import '../../css/r/ru98-mbsh.css';
import '../../css/m/mak42mb2l.css';
import '../../css/o/owoy5ubwu.css';
import '../../css/o/oro_7j5eu.css';
import '../../css/s/sz7fhx45v.css';
import '../../css/t/tl43rl8vh.css';
import '../../css/z/zv4yrzbqg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqft0zboq"/><path class="ru98-mbsh"/><path class="mak42mb2l"/><path class="owoy5ubwu"/><g class="oro_7j5eu"><path class="sz7fhx45v"/><path class="tl43rl8vh"/><path class="zv4yrzbqg"/></g>`,
		"fallback": "openmoji:space-shuttle",
	});
}

export default Component;
