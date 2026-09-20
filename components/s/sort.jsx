import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3gq70bqw.css';
import '../../css/v/v3xbnm0nn.css';
import '../../css/w/wdvky-a2y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3gq70bqw"/><path class="v3xbnm0nn"/><path class="wdvky-a2y"/>`,
		"fallback": "openmoji:sort",
	});
}

export default Component;
