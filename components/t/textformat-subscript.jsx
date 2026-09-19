import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w77y2n0rn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w77y2n0rn"/>`,
		"fallback": "f7:textformat-subscript",
	});
}

export default Component;
