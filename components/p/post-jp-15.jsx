import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yji4l09_m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yji4l09_m"/>`,
		"fallback": "maki:post-jp-15",
	});
}

export default Component;
