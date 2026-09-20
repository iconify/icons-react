import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f38yl6i_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f38yl6i_f"/>`,
		"fallback": "mdi:ladybug",
	});
}

export default Component;
