import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0-06wb8t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0-06wb8t"/>`,
		"fallback": "fa7-solid:user-minus",
	});
}

export default Component;
