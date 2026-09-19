import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qytbqacqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qytbqacqi"/>`,
		"fallback": "griddy-icons:quora",
	});
}

export default Component;
