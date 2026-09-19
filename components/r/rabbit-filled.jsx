import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd6y7dbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd6y7dbrg"/>`,
		"fallback": "griddy-icons:rabbit-filled",
	});
}

export default Component;
