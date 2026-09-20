import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk62wsz_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk62wsz_i"/>`,
		"fallback": "mdi:playlist-minus",
	});
}

export default Component;
