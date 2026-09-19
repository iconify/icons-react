import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx1df9t7l.css';
import '../../css/c/cjnhv0ssg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx1df9t7l"/><path class="cjnhv0ssg"/>`,
		"fallback": "bx:video-plus",
	});
}

export default Component;
