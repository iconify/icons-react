import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yslz4fbvt.css';
import '../../css/i/ik3zd0b_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yslz4fbvt"/><path class="ik3zd0b_h"/>`,
		"fallback": "energy-icons:volume-x-20",
	});
}

export default Component;
