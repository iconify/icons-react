import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekt9y_bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ekt9y_bzp"/>`,
		"fallback": "griddy-icons:location-pin-minus",
	});
}

export default Component;
