import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw4h6c1fd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw4h6c1fd"/>`,
		"fallback": "energy-icons:users-20-bold",
	});
}

export default Component;
