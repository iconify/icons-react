import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eprh5acmo.css';
import '../../css/x/x0-y109_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eprh5acmo"/><path clip-rule="evenodd" class="x0-y109_g"/>`,
		"fallback": "solar:medal-star-circle-bold-duotone",
	});
}

export default Component;
