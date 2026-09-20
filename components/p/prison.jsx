import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frw75db4w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frw75db4w"/>`,
		"fallback": "maki:prison",
	});
}

export default Component;
