import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx7nh0b0g.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx7nh0b0g"/>`,
		"fallback": "maki:mountain-11",
	});
}

export default Component;
