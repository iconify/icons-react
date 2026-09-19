import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m23rlq1om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m23rlq1om"/>`,
		"fallback": "feather:thumbs-down",
	});
}

export default Component;
