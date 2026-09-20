import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a61u5nbjv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a61u5nbjv"/>`,
		"fallback": "pinhead:lion-and-question-mark",
	});
}

export default Component;
