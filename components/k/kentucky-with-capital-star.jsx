import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwi-adcmy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwi-adcmy"/>`,
		"fallback": "pinhead:kentucky-with-capital-star",
	});
}

export default Component;
