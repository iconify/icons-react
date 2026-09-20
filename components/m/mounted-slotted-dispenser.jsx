import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx3ux99nb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx3ux99nb"/>`,
		"fallback": "pinhead:mounted-slotted-dispenser",
	});
}

export default Component;
