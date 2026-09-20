import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxsavgw-b.css';

const viewBox = {"width":1416,"height":1591};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxsavgw-b"/>`,
		"fallback": "thesvg-color:prosus",
	});
}

export default Component;
