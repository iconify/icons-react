import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ziswbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ziswbev"/>`,
		"fallback": "mdi:number-9-plus-box-outline",
	});
}

export default Component;
