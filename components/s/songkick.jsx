import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phpjd9j4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phpjd9j4m"/>`,
		"fallback": "simple-icons:songkick",
	});
}

export default Component;
