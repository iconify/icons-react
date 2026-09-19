import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni1tqcc4q.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni1tqcc4q"/>`,
		"fallback": "garden:line-chart-26",
	});
}

export default Component;
