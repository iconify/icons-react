import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo94e-b0r.css';
import '../../css/e/enjmbiu9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo94e-b0r"/><path class="enjmbiu9f"/>`,
		"fallback": "pixel:pro",
	});
}

export default Component;
