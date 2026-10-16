import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bryv9-bhw.css';
import '../../css/e/eakappb5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bryv9-bhw"/><path class="eakappb5q"/>`,
		"fallback": "energy-icons:rack-and-pinion-20-bold",
	});
}

export default Component;
