import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltt-bqb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltt-bqb9w"/>`,
		"fallback": "flowbite:laravel-solid",
	});
}

export default Component;
