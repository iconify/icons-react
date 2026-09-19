import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owmapqbtf.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owmapqbtf"/>`,
		"fallback": "zmdi:view-stream",
	});
}

export default Component;
