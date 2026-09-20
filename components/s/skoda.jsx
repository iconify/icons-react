import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttzi-7b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttzi-7b8g"/>`,
		"fallback": "thesvg:skoda",
	});
}

export default Component;
