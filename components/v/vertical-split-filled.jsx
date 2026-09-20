import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0w1_nr1i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d0w1_nr1i"/>`,
		"fallback": "lsicon:vertical-split-filled",
	});
}

export default Component;
