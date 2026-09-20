import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd6ddu7-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd6ddu7-u"/>`,
		"fallback": "simple-icons:seafile",
	});
}

export default Component;
