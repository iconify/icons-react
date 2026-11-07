import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6iy-gb8w.css';
import '../../css/u/uif7prbix.css';
import '../../css/w/w3j8bvi0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6iy-gb8w"/><path class="uif7prbix"/><path class="w3j8bvi0u"/>`,
		"fallback": "solar:test-tube-minimalistic-bold-duotone",
	});
}

export default Component;
