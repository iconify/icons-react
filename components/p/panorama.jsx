import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do_r7ii-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do_r7ii-f"/>`,
		"fallback": "mdi:panorama",
	});
}

export default Component;
