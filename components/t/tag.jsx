import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvkdqm3az.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvkdqm3az"/>`,
		"fallback": "fa7-solid:tag",
	});
}

export default Component;
