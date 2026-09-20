import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv2opow9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iv2opow9p"/>`,
		"fallback": "streamline:signal-low-solid",
	});
}

export default Component;
