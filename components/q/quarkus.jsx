import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grr8c5bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grr8c5bmp"/>`,
		"fallback": "thesvg-color:quarkus",
	});
}

export default Component;
