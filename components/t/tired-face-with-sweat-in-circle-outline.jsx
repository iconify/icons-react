import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrnnfb6_y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrnnfb6_y"/>`,
		"fallback": "pinhead:tired-face-with-sweat-in-circle-outline",
	});
}

export default Component;
