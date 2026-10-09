import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2jer4rst.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2jer4rst"/>`,
		"fallback": "energy-icons:volcano-20",
	});
}

export default Component;
