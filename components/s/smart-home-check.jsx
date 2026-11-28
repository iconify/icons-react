import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiwrykbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiwrykbev"/>`,
		"fallback": "noviair-light:smart-home-check",
	});
}

export default Component;
