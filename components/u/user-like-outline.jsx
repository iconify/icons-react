import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8scinpfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8scinpfx"/>`,
		"fallback": "lsicon:user-like-outline",
	});
}

export default Component;
