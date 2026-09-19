import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svvim6bry.css';
import '../../css/x/x8snpsbmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svvim6bry"/><path class="x8snpsbmu"/>`,
		"fallback": "carbon:stacked-move",
	});
}

export default Component;
