import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9n5_yi4d.css';
import '../../css/x/xvcpc4g1v.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9n5_yi4d"/><path class="xvcpc4g1v"/>`,
		"fallback": "iwwa:power",
	});
}

export default Component;
