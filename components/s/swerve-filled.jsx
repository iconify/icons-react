import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls9fy_b9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ls9fy_b9v"/>`,
		"fallback": "lsicon:swerve-filled",
	});
}

export default Component;
