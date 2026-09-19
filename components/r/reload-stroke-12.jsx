import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzj7dl35p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzj7dl35p"/>`,
		"fallback": "garden:reload-stroke-12",
	});
}

export default Component;
