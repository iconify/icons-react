import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti3zyb3xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ti3zyb3xv"/>`,
		"fallback": "solar:table-outline",
	});
}

export default Component;
