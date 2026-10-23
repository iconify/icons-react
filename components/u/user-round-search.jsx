import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrk5zut0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrk5zut0w"/>`,
		"fallback": "vadivam:user-round-search",
	});
}

export default Component;
