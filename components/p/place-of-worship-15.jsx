import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfefpob_m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfefpob_m"/>`,
		"fallback": "maki:place-of-worship-15",
	});
}

export default Component;
