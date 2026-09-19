import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh066vywn.css';
import '../../css/c/cobkpuiyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh066vywn"/><path clip-rule="evenodd" class="cobkpuiyr"/>`,
		"fallback": "basil:location-solid",
	});
}

export default Component;
