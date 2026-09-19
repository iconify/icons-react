import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9ia12bpm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9ia12bpm"/>`,
		"fallback": "dinkie-icons:u1fae5-small",
	});
}

export default Component;
