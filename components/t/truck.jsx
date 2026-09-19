import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vop63v7-w.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vop63v7-w"/>`,
		"fallback": "zmdi:truck",
	});
}

export default Component;
