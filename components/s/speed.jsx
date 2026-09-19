import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7pj_5bvt.css';

const viewBox = {"width":1024,"height":741};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7pj_5bvt"/>`,
		"fallback": "whh:speed",
	});
}

export default Component;
