import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlk5hvfth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlk5hvfth"/>`,
		"fallback": "ri:trademark-line",
	});
}

export default Component;
