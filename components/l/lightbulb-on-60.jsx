import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5zf5nqcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5zf5nqcs"/>`,
		"fallback": "mdi:lightbulb-on-60",
	});
}

export default Component;
