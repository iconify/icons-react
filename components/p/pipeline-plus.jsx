import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2cny68tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2cny68tj"/>`,
		"fallback": "andrsrxn:pipeline-plus",
	});
}

export default Component;
