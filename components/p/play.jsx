import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/v/vqu-kvbga.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="vqu-kvbga"/>`,
		"fallback": "ei:play",
	});
}

export default Component;
