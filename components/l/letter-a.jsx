import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9o-zr2ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9o-zr2ay"/>`,
		"fallback": "mdi:letter-a",
	});
}

export default Component;
