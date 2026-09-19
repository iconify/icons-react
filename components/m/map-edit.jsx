import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt4qdxb4y.css';
import '../../css/x/xoqcm6b1o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt4qdxb4y"/><path class="xoqcm6b1o"/>`,
		"fallback": "gis:map-edit",
	});
}

export default Component;
