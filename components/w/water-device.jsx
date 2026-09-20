import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3wuugj7j.css';
import '../../css/t/t42cetwhi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3wuugj7j"/><path class="t42cetwhi"/>`,
		"fallback": "temaki:water-device",
	});
}

export default Component;
