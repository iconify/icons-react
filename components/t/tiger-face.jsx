import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvtqidc3f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvtqidc3f"/>`,
		"fallback": "dinkie-icons:tiger-face",
	});
}

export default Component;
