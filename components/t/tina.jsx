import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glaj9pb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glaj9pb5b"/>`,
		"fallback": "thesvg:tina",
	});
}

export default Component;
