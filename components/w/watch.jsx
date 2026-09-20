import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gde_rkbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gde_rkbdv"/>`,
		"fallback": "pixelarticons:watch",
	});
}

export default Component;
