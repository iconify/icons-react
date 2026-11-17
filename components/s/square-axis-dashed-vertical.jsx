import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epvlj5hbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epvlj5hbl"/>`,
		"fallback": "lucide:square-axis-dashed-vertical",
	});
}

export default Component;
