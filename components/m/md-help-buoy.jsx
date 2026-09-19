import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpgtxy_zq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpgtxy_zq"/>`,
		"fallback": "ion:md-help-buoy",
	});
}

export default Component;
