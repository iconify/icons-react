import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0g_v6b6w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0g_v6b6w"/>`,
		"fallback": "carbon:modified-oldest",
	});
}

export default Component;
