import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cowd3yulo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cowd3yulo"/>`,
		"fallback": "lets-icons:suitcase-light",
	});
}

export default Component;
