import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idpi_1brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idpi_1brs"/>`,
		"fallback": "thesvg-color:pexels",
	});
}

export default Component;
