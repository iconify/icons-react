import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2ygjsqjv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2ygjsqjv"/>`,
		"fallback": "system-uicons:upload",
	});
}

export default Component;
