import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz9fz5bvf.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz9fz5bvf"/>`,
		"fallback": "el:tasks",
	});
}

export default Component;
