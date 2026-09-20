import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2s3x9bme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2s3x9bme"/>`,
		"fallback": "solar:list-arrow-down-bold",
	});
}

export default Component;
