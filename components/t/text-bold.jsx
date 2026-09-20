import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfq9sccob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfq9sccob"/>`,
		"fallback": "ix:text-bold",
	});
}

export default Component;
