import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2g1w478w.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2g1w478w"/>`,
		"fallback": "whh:sortbynameascending",
	});
}

export default Component;
