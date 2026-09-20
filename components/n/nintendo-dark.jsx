import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h37dk2a9p.css';

const viewBox = {"width":405.1,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h37dk2a9p"/>`,
		"fallback": "thesvg-color:nintendo-dark",
	});
}

export default Component;
