import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arc1umbxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arc1umbxf"/>`,
		"fallback": "fa6-solid:paste",
	});
}

export default Component;
