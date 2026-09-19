import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gowb91bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gowb91bbu"/>`,
		"fallback": "griddy-icons:shield-minus",
	});
}

export default Component;
