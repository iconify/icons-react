import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyogtrxua.css';

const viewBox = {"width":517.4,"height":517.4,"left":74.1,"top":22.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyogtrxua"/>`,
		"fallback": "thesvg-color:sparkyfitness",
	});
}

export default Component;
