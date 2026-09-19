import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8eeycb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8eeycb8g"/>`,
		"fallback": "bxl:invision",
	});
}

export default Component;
