import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1a2-qbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1a2-qbfg"/>`,
		"fallback": "ri:volume-off-vibrate-line",
	});
}

export default Component;
