import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxoo9ox9p.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxoo9ox9p"/>`,
		"fallback": "brandico:vimeo-rect",
	});
}

export default Component;
