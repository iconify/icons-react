import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5skxtb6n.css';
import '../../css/n/njarltr6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5skxtb6n"/><path class="njarltr6p"/>`,
		"fallback": "ooui:log-in-rtl",
	});
}

export default Component;
