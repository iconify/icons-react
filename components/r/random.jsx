import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t38tdl0sl.css';

const viewBox = {"width":1792,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t38tdl0sl"/>`,
		"fallback": "fa:random",
	});
}

export default Component;
