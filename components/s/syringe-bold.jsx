import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3oz6trwf.css';
import '../../css/d/dmz5tfbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3oz6trwf"/><path class="dmz5tfbeq"/>`,
		"fallback": "solar:syringe-bold",
	});
}

export default Component;
