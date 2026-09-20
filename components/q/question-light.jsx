import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr7avqm6c.css';
import '../../css/r/rhx6aqb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr7avqm6c"/><path class="rhx6aqb6q"/>`,
		"fallback": "stash:question-light",
	});
}

export default Component;
