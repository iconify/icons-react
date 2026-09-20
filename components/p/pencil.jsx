import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh6cq6a0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh6cq6a0z"/>`,
		"fallback": "vadivam:pencil",
	});
}

export default Component;
