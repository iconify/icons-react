import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyhs6fcbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyhs6fcbj"/>`,
		"fallback": "simple-icons:openbadges",
	});
}

export default Component;
