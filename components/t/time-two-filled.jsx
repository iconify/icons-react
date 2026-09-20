import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0bnbwbel.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0bnbwbel"/>`,
		"fallback": "lsicon:time-two-filled",
	});
}

export default Component;
