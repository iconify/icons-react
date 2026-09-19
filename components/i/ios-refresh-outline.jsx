import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg2pl9wsr.css';
import '../../css/i/itc5zdbai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg2pl9wsr"/><path class="itc5zdbai"/>`,
		"fallback": "ion:ios-refresh-outline",
	});
}

export default Component;
