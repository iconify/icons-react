import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiofest-s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiofest-s"/>`,
		"fallback": "bi:sim-slash-fill",
	});
}

export default Component;
