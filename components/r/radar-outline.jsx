import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjh0nmb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kjh0nmb0i"/>`,
		"fallback": "solar:radar-outline",
	});
}

export default Component;
