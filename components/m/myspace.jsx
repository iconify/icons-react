import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m92zj5l4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m92zj5l4z"/>`,
		"fallback": "thesvg-color:myspace",
	});
}

export default Component;
