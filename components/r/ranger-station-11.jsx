import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7-g323_v.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7-g323_v"/>`,
		"fallback": "maki:ranger-station-11",
	});
}

export default Component;
