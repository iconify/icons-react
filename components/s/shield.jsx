import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7wo_9l7m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7wo_9l7m"/>`,
		"fallback": "temaki:shield",
	});
}

export default Component;
