import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xahhmbe9e.css';
import '../../css/o/op1eu4bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xahhmbe9e"/><path class="op1eu4bxf"/>`,
		"fallback": "boxicons:medal-star-alt",
	});
}

export default Component;
