import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa3cnv-4o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa3cnv-4o"/>`,
		"fallback": "memory:upload",
	});
}

export default Component;
