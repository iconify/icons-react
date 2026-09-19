import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5yo40bep.css';

const viewBox = {"width":16,"height":7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5yo40bep"/>`,
		"fallback": "formkit:up",
	});
}

export default Component;
