import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n39e69h7g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n39e69h7g"/>`,
		"fallback": "devicon:linear",
	});
}

export default Component;
