import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d37s1yb9q.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d37s1yb9q"/>`,
		"fallback": "fa6-solid:signal",
	});
}

export default Component;
