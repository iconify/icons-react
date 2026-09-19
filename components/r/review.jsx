import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6qqfdbqz.css';
import '../../css/t/tsepx-fqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6qqfdbqz"/><path class="tsepx-fqx"/>`,
		"fallback": "carbon:review",
	});
}

export default Component;
