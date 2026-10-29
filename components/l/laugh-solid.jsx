import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdcg-32fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdcg-32fy"/>`,
		"fallback": "withicons:laugh-solid",
	});
}

export default Component;
