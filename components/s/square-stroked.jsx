import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhgt1i-cv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhgt1i-cv"/>`,
		"fallback": "maki:square-stroked",
	});
}

export default Component;
