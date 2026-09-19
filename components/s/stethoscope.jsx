import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4q1pjb7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4q1pjb7w"/>`,
		"fallback": "ps:stethoscope",
	});
}

export default Component;
