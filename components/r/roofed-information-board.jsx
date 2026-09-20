import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr0d2pbyz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr0d2pbyz"/>`,
		"fallback": "pinhead:roofed-information-board",
	});
}

export default Component;
