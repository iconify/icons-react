import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yynfaacui.css';
import '../../css/t/tqme7yb3j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yynfaacui"/><path class="tqme7yb3j"/>`,
		"fallback": "garden:question-mark-circle-stroke-20",
	});
}

export default Component;
