import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv95d0kjj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv95d0kjj"/>`,
		"fallback": "fa7-solid:random",
	});
}

export default Component;
