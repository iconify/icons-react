import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6hb5h4da.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6hb5h4da"/>`,
		"fallback": "system-uicons:plus",
	});
}

export default Component;
