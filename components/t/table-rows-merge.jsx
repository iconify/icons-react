import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7t4c_ylw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7t4c_ylw"/>`,
		"fallback": "boxicons:table-rows-merge",
	});
}

export default Component;
