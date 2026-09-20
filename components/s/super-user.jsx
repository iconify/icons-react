import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwzc6v6gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwzc6v6gf"/>`,
		"fallback": "thesvg-color:super-user",
	});
}

export default Component;
