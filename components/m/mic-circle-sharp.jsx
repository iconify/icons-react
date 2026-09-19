import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piij8abfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piij8abfl"/>`,
		"fallback": "famicons:mic-circle-sharp",
	});
}

export default Component;
