import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4by69ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec4by69ir"/>`,
		"fallback": "iconaut:popsicle-solid",
	});
}

export default Component;
