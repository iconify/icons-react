import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsl_1urnp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsl_1urnp"/>`,
		"fallback": "fa7-solid:remove",
	});
}

export default Component;
