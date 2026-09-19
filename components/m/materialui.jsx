import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0kz23gan.css';
import '../../css/b/b56fliz5r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0kz23gan"/><path class="b56fliz5r"/>`,
		"fallback": "devicon-plain:materialui",
	});
}

export default Component;
