import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my_cuacnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my_cuacnb"/>`,
		"fallback": "sidekickicons:sidebar-left",
	});
}

export default Component;
