import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2msx5_t.css';
import '../../css/v/v5fufdeal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv2msx5_t"/><path clip-rule="evenodd" class="v5fufdeal"/>`,
		"fallback": "solar:medal-star-square-bold-duotone",
	});
}

export default Component;
