import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2w_dsb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2w_dsb6v"/>`,
		"fallback": "token:sparta",
	});
}

export default Component;
