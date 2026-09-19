import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt7mp2tnd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt7mp2tnd"/>`,
		"fallback": "devicon-plain:styledcomponents",
	});
}

export default Component;
