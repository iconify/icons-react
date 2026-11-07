import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s02o69bfv.css';
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
		"content": `<path class="s02o69bfv"/><path class="yslzmeb8y"/><path clip-rule="evenodd" class="jwcfy35xs"/>`,
		"fallback": "solar:phone-calling-rounded-bold-duotone",
	});
}

export default Component;
