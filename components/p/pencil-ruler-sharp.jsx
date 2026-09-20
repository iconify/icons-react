import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cofugbb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cofugbb4i"/>`,
		"fallback": "keyline-icons:pencil-ruler-sharp",
	});
}

export default Component;
