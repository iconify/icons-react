import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9j6e4_4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9j6e4_4g"/>`,
		"fallback": "lucide:text-align-justify-center",
	});
}

export default Component;
