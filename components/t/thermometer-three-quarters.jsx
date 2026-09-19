import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di8t26b8w.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di8t26b8w"/>`,
		"fallback": "fa:thermometer-three-quarters",
	});
}

export default Component;
