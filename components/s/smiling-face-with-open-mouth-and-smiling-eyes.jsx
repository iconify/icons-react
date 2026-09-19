import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1mwht5bg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1mwht5bg"/>`,
		"fallback": "dinkie-icons:smiling-face-with-open-mouth-and-smiling-eyes",
	});
}

export default Component;
