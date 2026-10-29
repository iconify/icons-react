import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb1qi_bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb1qi_bbj"/>`,
		"fallback": "withicons:scroll-text-solid",
	});
}

export default Component;
