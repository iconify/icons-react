import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnmr3zbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnmr3zbwg"/>`,
		"fallback": "noviair:monitor-play",
	});
}

export default Component;
