import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djaq13bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djaq13bfs"/>`,
		"fallback": "vadivam:mouse-pointer-click",
	});
}

export default Component;
