import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbf5ltb_f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbf5ltb_f"/>`,
		"fallback": "f7:minus-rectangle",
	});
}

export default Component;
