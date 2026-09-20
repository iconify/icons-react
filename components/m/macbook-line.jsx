import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o55o2jb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o55o2jb7w"/>`,
		"fallback": "ri:macbook-line",
	});
}

export default Component;
