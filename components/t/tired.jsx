import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwhvhgbjs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwhvhgbjs"/>`,
		"fallback": "fa7-solid:tired",
	});
}

export default Component;
