import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x14s3jbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x14s3jbek"/>`,
		"fallback": "mynaui:letter-u-hexagon-solid",
	});
}

export default Component;
