import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utoyqy2ab.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utoyqy2ab"/>`,
		"fallback": "garden:shapes-stroke-20",
	});
}

export default Component;
