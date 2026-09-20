import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkhwucc5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkhwucc5k"/>`,
		"fallback": "octicon:question-bubble-24",
	});
}

export default Component;
