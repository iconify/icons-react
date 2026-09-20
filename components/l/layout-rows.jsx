import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0_tp49dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0_tp49dm"/>`,
		"fallback": "tabler:layout-rows",
	});
}

export default Component;
