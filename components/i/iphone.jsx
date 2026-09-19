import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha6__qbxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha6__qbxj"/>`,
		"fallback": "icons8:iphone",
	});
}

export default Component;
