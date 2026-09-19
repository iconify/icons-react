import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-9o0_b7b.css';
import '../../css/k/ka84qdbbc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-9o0_b7b"/><path class="ka84qdbbc"/>`,
		"fallback": "devicon:keras",
	});
}

export default Component;
