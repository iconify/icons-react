import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahiw1-bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahiw1-bap"/>`,
		"fallback": "mdi:lock-remove",
	});
}

export default Component;
