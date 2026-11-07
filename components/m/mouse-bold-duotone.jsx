import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1vz89b1w.css';
import '../../css/z/z5dw2mc_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1vz89b1w"/><path class="z5dw2mc_u"/>`,
		"fallback": "solar:mouse-bold-duotone",
	});
}

export default Component;
