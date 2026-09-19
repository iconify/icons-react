import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj61mt9fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj61mt9fz"/>`,
		"fallback": "iconamoon:number-1",
	});
}

export default Component;
