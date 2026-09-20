import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yftarabyl.css';
import '../../css/q/qxihk5bwn.css';
import '../../css/k/knu7vdbvo.css';
import '../../css/o/ofhs6z3pm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yftarabyl"/><path class="qxihk5bwn"/><path class="knu7vdbvo"/><path class="ofhs6z3pm"/>`,
		"fallback": "selfhst:microsoft-word-light",
	});
}

export default Component;
