import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so45uzv5f.css';
import '../../css/w/w7_a60-yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so45uzv5f"/><path clip-rule="evenodd" class="w7_a60-yr"/>`,
		"fallback": "solar:medal-ribbons-star-bold-duotone",
	});
}

export default Component;
