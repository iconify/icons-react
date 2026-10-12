import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5rglpbhk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5rglpbhk"/>`,
		"fallback": "garden:trash-fill-20",
	});
}

export default Component;
