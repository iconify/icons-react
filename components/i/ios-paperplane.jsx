import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhvnz9bwg.css';
import '../../css/s/soter0kom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhvnz9bwg"/><path class="soter0kom"/>`,
		"fallback": "ion:ios-paperplane",
	});
}

export default Component;
