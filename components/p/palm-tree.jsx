import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5fc3pbqt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5fc3pbqt"/>`,
		"fallback": "dinkie-icons:palm-tree",
	});
}

export default Component;
