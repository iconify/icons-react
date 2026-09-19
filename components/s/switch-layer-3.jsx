import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzr0lxblt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzr0lxblt"/>`,
		"fallback": "carbon:switch-layer-3",
	});
}

export default Component;
