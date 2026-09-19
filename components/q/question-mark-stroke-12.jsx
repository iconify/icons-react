import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovsyq3krw.css';
import '../../css/r/r4-qnybet.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovsyq3krw"/><circle class="r4-qnybet"/>`,
		"fallback": "garden:question-mark-stroke-12",
	});
}

export default Component;
