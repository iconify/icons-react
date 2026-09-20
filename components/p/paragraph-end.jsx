import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhljz6o3t.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhljz6o3t"/>`,
		"fallback": "system-uicons:paragraph-end",
	});
}

export default Component;
