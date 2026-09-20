import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyz4p1nzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyz4p1nzt"/>`,
		"fallback": "weui:report-problem-filled",
	});
}

export default Component;
