import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oglcqcc1u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oglcqcc1u"/>`,
		"fallback": "dinkie-icons:right-hook-arrow",
	});
}

export default Component;
