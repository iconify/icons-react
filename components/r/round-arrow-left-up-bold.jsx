import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq23v-bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jq23v-bhy"/>`,
		"fallback": "solar:round-arrow-left-up-bold",
	});
}

export default Component;
