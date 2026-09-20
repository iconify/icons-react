import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdhjejb_m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdhjejb_m"/>`,
		"fallback": "pinhead:sad-face-in-circle-outline",
	});
}

export default Component;
