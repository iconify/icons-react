import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dayaw-b9i.css';

const viewBox = {"width":77,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dayaw-b9i"/>`,
		"fallback": "ls:periodcentered",
	});
}

export default Component;
