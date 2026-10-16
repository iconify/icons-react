import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uexd2bbpi.css';
import '../../css/q/qan8ow8hl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uexd2bbpi"/><path class="qan8ow8hl"/>`,
		"fallback": "energy-icons:reactor-20-bold",
	});
}

export default Component;
