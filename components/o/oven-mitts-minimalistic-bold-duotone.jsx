import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex5i2y_lu.css';
import '../../css/k/ka-iktbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ex5i2y_lu"/><path class="ka-iktbmz"/>`,
		"fallback": "solar:oven-mitts-minimalistic-bold-duotone",
	});
}

export default Component;
