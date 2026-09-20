import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpjm06bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpjm06bue"/>`,
		"fallback": "simple-icons:surveymonkey",
	});
}

export default Component;
