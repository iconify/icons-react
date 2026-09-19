import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv9w3mbgc.css';

const viewBox = {"width":271,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv9w3mbgc"/>`,
		"fallback": "file-icons:scratch",
	});
}

export default Component;
