import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au8ux7_ws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au8ux7_ws"/>`,
		"fallback": "roentgen:water-from-pipe",
	});
}

export default Component;
