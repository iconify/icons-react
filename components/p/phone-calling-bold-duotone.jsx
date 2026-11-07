import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j05r12o9z.css';
import '../../css/y/yslzmeb8y.css';
import '../../css/j/jwcfy35xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j05r12o9z"/><path class="yslzmeb8y"/><path clip-rule="evenodd" class="jwcfy35xs"/>`,
		"fallback": "solar:phone-calling-bold-duotone",
	});
}

export default Component;
