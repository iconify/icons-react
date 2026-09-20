import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h64dolbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h64dolbfs"/>`,
		"fallback": "lets-icons:transfer-long-left",
	});
}

export default Component;
