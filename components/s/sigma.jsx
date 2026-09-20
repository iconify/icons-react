import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op0u8qj4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op0u8qj4m"/>`,
		"fallback": "lucide:sigma",
	});
}

export default Component;
