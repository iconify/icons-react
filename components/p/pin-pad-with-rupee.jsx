import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfh4p2bfx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfh4p2bfx"/>`,
		"fallback": "pinhead:pin-pad-with-rupee",
	});
}

export default Component;
