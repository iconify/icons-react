import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x24ss0jya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x24ss0jya"/>`,
		"fallback": "ri:luggage-deposit-line",
	});
}

export default Component;
