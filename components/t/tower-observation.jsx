import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-l2gbnr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-l2gbnr"/>`,
		"fallback": "fa7-solid:tower-observation",
	});
}

export default Component;
