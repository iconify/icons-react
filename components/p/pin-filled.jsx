import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xluo-0b2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xluo-0b2x"/>`,
		"fallback": "lsicon:pin-filled",
	});
}

export default Component;
