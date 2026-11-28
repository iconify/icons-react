import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjw-5hb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjw-5hb7x"/>`,
		"fallback": "iconaut:shield-down-solid",
	});
}

export default Component;
