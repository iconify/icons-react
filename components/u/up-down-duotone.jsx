import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj71yl0qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj71yl0qk"/>`,
		"fallback": "si:up-down-duotone",
	});
}

export default Component;
