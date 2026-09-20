import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys5db5b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys5db5b0b"/>`,
		"fallback": "lucide:magnet",
	});
}

export default Component;
