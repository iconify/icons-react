import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4i2n-v3c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4i2n-v3c"/>`,
		"fallback": "temaki:tree-and-bench",
	});
}

export default Component;
