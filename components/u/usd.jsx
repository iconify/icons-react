import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghv5cybvf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghv5cybvf"/>`,
		"fallback": "cryptocurrency:usd",
	});
}

export default Component;
