import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1fgboumi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j1fgboumi"/>`,
		"fallback": "qlementine-icons:pedal-16",
	});
}

export default Component;
