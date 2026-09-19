import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezeb_bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezeb_bbr"/>`,
		"fallback": "humbleicons:map",
	});
}

export default Component;
