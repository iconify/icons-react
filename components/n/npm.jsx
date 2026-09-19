import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpg-6cfio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpg-6cfio"/>`,
		"fallback": "icomoon-free:npm",
	});
}

export default Component;
