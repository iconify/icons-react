import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rebh1z_zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rebh1z_zd"/>`,
		"fallback": "noviair:map-pin-arrow-right",
	});
}

export default Component;
