import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz8z7jozz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz8z7jozz"/>`,
		"fallback": "simple-icons:pdq",
	});
}

export default Component;
