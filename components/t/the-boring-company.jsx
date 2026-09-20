import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pypxp0b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pypxp0b2w"/>`,
		"fallback": "thesvg-color:the-boring-company",
	});
}

export default Component;
