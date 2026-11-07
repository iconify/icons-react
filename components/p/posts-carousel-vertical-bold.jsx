import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcxpyny9b.css';
import '../../css/t/tslomuedm.css';
import '../../css/y/yjypexard.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcxpyny9b"/><path class="tslomuedm"/><path class="yjypexard"/>`,
		"fallback": "solar:posts-carousel-vertical-bold",
	});
}

export default Component;
