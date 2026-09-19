import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqt70smsd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqt70smsd"/>`,
		"fallback": "dinkie-icons:right-arrow-circled-filled",
	});
}

export default Component;
