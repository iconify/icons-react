import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijp3onb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijp3onb7k"/>`,
		"fallback": "ri:money-euro-circle-fill",
	});
}

export default Component;
