import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssvyn6bgq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssvyn6bgq"/>`,
		"fallback": "devicon:tenzir",
	});
}

export default Component;
