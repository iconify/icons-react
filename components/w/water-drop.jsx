import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6adeqbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6adeqbpi"/>`,
		"fallback": "boxicons:water-drop",
	});
}

export default Component;
