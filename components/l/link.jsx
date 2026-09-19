import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvh2v--5e.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvh2v--5e"/>`,
		"fallback": "ls:link",
	});
}

export default Component;
