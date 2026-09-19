import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo8rj3gpj.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo8rj3gpj"/>`,
		"fallback": "garden:monitor-26",
	});
}

export default Component;
