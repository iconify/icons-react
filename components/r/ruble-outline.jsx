import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgh4-s7mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgh4-s7mh"/>`,
		"fallback": "solar:ruble-outline",
	});
}

export default Component;
