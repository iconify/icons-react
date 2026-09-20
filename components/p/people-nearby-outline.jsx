import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1v-swjzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1v-swjzv"/>`,
		"fallback": "solar:people-nearby-outline",
	});
}

export default Component;
