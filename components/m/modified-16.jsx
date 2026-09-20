import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q47662ucc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q47662ucc"/>`,
		"fallback": "qlementine-icons:modified-16",
	});
}

export default Component;
