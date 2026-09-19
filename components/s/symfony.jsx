import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icf6z6_1x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icf6z6_1x"/>`,
		"fallback": "devicon:symfony",
	});
}

export default Component;
