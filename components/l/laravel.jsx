import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpgg-p1ur.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpgg-p1ur"/>`,
		"fallback": "devicon:laravel",
	});
}

export default Component;
