import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzn8h_vqn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzn8h_vqn"/>`,
		"fallback": "pinhead:pole-with-antenna-array",
	});
}

export default Component;
