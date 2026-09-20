import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4fr1mber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4fr1mber"/>`,
		"fallback": "ri:price-tag-3-line",
	});
}

export default Component;
