import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4vbgw1nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a4vbgw1nj"/>`,
		"fallback": "heroicons:pause-circle-16-solid",
	});
}

export default Component;
