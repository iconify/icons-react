import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usj0p_4lr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usj0p_4lr"/>`,
		"fallback": "foundation:unlink",
	});
}

export default Component;
