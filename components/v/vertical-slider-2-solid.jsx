import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihj4t_b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ihj4t_b_p"/>`,
		"fallback": "streamline-sharp:vertical-slider-2-solid",
	});
}

export default Component;
