import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khk_fyb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khk_fyb0m"/>`,
		"fallback": "vadivam:list-video",
	});
}

export default Component;
