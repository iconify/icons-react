import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-kvwzx-m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-kvwzx-m"/>`,
		"fallback": "f7:pause-circle",
	});
}

export default Component;
