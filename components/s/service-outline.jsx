import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb6xjt88u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb6xjt88u"/>`,
		"fallback": "lsicon:service-outline",
	});
}

export default Component;
