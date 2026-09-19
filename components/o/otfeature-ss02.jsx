import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob2r7obdi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob2r7obdi"/>`,
		"fallback": "dinkie-icons:otfeature-ss02",
	});
}

export default Component;
