import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch_ylrb6q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ch_ylrb6q"/>`,
		"fallback": "lsicon:thermo-dynamic-filled",
	});
}

export default Component;
