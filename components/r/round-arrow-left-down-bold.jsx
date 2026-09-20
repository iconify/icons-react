import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6axq2bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6axq2bnp"/>`,
		"fallback": "solar:round-arrow-left-down-bold",
	});
}

export default Component;
