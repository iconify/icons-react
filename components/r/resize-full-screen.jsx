import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gef9zeb8w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gef9zeb8w"/>`,
		"fallback": "entypo:resize-full-screen",
	});
}

export default Component;
