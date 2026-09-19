import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhh5x7blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rhh5x7blm"/>`,
		"fallback": "griddy-icons:phone-forward",
	});
}

export default Component;
