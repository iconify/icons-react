import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3rjlns8o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3rjlns8o"/>`,
		"fallback": "fa7-solid:pencil-alt",
	});
}

export default Component;
