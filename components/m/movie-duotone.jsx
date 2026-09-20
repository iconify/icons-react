import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8wdtyblq.css';
import '../../css/m/mn3wcdgwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8wdtyblq"/><path class="mn3wcdgwc"/>`,
		"fallback": "si:movie-duotone",
	});
}

export default Component;
