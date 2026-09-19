import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n61vkeq-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n61vkeq-x"/>`,
		"fallback": "hugeicons:upload-06",
	});
}

export default Component;
