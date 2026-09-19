import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y83u2k-am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y83u2k-am"/>`,
		"fallback": "boxicons:spanner-filled",
	});
}

export default Component;
