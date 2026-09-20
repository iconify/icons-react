import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5a7zsawl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5a7zsawl"/>`,
		"fallback": "lsicon:volume-up-filled",
	});
}

export default Component;
