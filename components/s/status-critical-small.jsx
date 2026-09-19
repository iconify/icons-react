import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fapfoe3xd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fapfoe3xd"/>`,
		"fallback": "grommet-icons:status-critical-small",
	});
}

export default Component;
