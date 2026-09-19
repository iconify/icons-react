import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1s3nebnj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1s3nebnj"/>`,
		"fallback": "file-icons:v8",
	});
}

export default Component;
