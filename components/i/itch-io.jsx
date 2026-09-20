import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkg0_ibsl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkg0_ibsl"/>`,
		"fallback": "la:itch-io",
	});
}

export default Component;
