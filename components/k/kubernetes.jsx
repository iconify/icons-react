import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu__y2bde.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu__y2bde"/>`,
		"fallback": "devicon-plain:kubernetes",
	});
}

export default Component;
