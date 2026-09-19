import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpg98ub8f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpg98ub8f"/>`,
		"fallback": "fa7-solid:rod-asclepius",
	});
}

export default Component;
