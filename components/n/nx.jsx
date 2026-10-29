import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st5z-kkqa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st5z-kkqa"/>`,
		"fallback": "devicon:nx",
	});
}

export default Component;
