import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk-0a1bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk-0a1bjb"/>`,
		"fallback": "noviair-light:power",
	});
}

export default Component;
