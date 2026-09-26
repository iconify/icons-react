import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q268_fbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q268_fbou"/>`,
		"fallback": "solar:panels-top-right-outline",
	});
}

export default Component;
