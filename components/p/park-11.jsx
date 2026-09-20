import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1hcn6bsf.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1hcn6bsf"/>`,
		"fallback": "maki:park-11",
	});
}

export default Component;
