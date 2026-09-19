import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsclxi3nr.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsclxi3nr"/>`,
		"fallback": "fa6-solid:turn-up",
	});
}

export default Component;
