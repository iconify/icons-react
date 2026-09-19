import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4yqyt6tg.css';
import '../../css/n/nnl6f83rm.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4yqyt6tg"/><path class="nnl6f83rm"/>`,
		"fallback": "fontisto:jira",
	});
}

export default Component;
