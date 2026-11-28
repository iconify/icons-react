import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzbcbub2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzbcbub2l"/>`,
		"fallback": "noviair-light:waves",
	});
}

export default Component;
