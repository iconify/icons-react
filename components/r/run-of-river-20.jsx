import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwfb0b_qf.css';
import '../../css/q/qxaxj2trm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwfb0b_qf"/><path class="qxaxj2trm"/>`,
		"fallback": "energy-icons:run-of-river-20",
	});
}

export default Component;
