import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbjbhable.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbjbhable"/>`,
		"fallback": "thesvg-color:starz",
	});
}

export default Component;
