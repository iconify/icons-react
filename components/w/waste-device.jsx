import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3wuugj7j.css';
import '../../css/y/ypl2tntwp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3wuugj7j"/><path class="ypl2tntwp"/>`,
		"fallback": "temaki:waste-device",
	});
}

export default Component;
