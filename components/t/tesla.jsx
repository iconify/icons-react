import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk_acg45v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk_acg45v"/>`,
		"fallback": "fontisto:tesla",
	});
}

export default Component;
