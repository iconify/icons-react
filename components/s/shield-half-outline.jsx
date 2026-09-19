import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-sd1yvj.css';
import '../../css/p/pix652y1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-sd1yvj"/><path class="pix652y1y"/>`,
		"fallback": "famicons:shield-half-outline",
	});
}

export default Component;
