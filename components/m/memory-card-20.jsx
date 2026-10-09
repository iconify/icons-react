import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh1gyn4rx.css';
import '../../css/d/dh_lsrzrh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh1gyn4rx"/><path class="dh_lsrzrh"/>`,
		"fallback": "energy-icons:memory-card-20",
	});
}

export default Component;
