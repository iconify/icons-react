import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpmm57b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpmm57b_y"/>`,
		"fallback": "thesvg-color:star-trek",
	});
}

export default Component;
