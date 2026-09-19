import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_kz3cc2y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_kz3cc2y"/>`,
		"fallback": "fa7-regular:trash-can",
	});
}

export default Component;
