import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj606rbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj606rbir"/>`,
		"fallback": "thesvg-color:nordic-semiconductor",
	});
}

export default Component;
