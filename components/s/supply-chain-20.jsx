import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7tm0ry1a.css';
import '../../css/i/ivgem8b_w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7tm0ry1a"/><path class="ivgem8b_w"/>`,
		"fallback": "energy-icons:supply-chain-20",
	});
}

export default Component;
