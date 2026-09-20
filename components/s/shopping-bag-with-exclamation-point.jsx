import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng5pvcbgc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng5pvcbgc"/>`,
		"fallback": "pinhead:shopping-bag-with-exclamation-point",
	});
}

export default Component;
