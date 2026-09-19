import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7jzn3aob.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7jzn3aob"/>`,
		"fallback": "fa7-solid:slash",
	});
}

export default Component;
