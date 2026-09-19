import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1rd8fb9n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1rd8fb9n"/>`,
		"fallback": "devicon:railway",
	});
}

export default Component;
