import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljgiy05uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljgiy05uk"/>`,
		"fallback": "iconaut:iv-bag-solid",
	});
}

export default Component;
