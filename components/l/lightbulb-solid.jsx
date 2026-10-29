import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5743yjhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5743yjhk"/>`,
		"fallback": "withicons:lightbulb-solid",
	});
}

export default Component;
