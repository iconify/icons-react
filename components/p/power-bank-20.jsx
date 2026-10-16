import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxhnq1bnf.css';
import '../../css/r/rx2al_b5l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxhnq1bnf"/><path class="rx2al_b5l"/>`,
		"fallback": "energy-icons:power-bank-20",
	});
}

export default Component;
