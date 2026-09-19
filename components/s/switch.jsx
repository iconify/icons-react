import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct6z4mrtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ct6z4mrtx"/>`,
		"fallback": "griddy-icons:switch",
	});
}

export default Component;
