import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5rxkyb0h.css';
import '../../css/i/i9q0xsztd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5rxkyb0h"/><path class="i9q0xsztd"/>`,
		"fallback": "qlementine-icons:rotate-anticlockwise-16",
	});
}

export default Component;
