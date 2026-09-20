import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgu741bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgu741bmh"/>`,
		"fallback": "thesvg-color:maze",
	});
}

export default Component;
