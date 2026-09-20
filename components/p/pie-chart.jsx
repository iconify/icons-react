import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukba4dbai.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukba4dbai"/>`,
		"fallback": "simple-line-icons:pie-chart",
	});
}

export default Component;
