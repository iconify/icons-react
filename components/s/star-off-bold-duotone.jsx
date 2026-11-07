import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwfo2luxv.css';
import '../../css/z/z1_6pqjiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwfo2luxv"/><path class="z1_6pqjiq"/>`,
		"fallback": "solar:star-off-bold-duotone",
	});
}

export default Component;
