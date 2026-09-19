import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj2xsotgg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj2xsotgg"/>`,
		"fallback": "codicon:server",
	});
}

export default Component;
