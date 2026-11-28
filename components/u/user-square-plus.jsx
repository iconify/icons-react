import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkt3i8kst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkt3i8kst"/>`,
		"fallback": "noviair-light:user-square-plus",
	});
}

export default Component;
