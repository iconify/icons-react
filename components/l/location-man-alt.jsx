import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1w22p8jq.css';
import '../../css/i/i388mubqy.css';
import '../../css/v/vc01epbab.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1w22p8jq"/><path class="i388mubqy"/><circle class="vc01epbab"/>`,
		"fallback": "gis:location-man-alt",
	});
}

export default Component;
