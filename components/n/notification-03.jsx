import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hukg_nb-f.css';
import '../../css/u/un9gz-7ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hukg_nb-f"/><path class="un9gz-7ua"/></g>`,
		"fallback": "hugeicons:notification-03",
	});
}

export default Component;
