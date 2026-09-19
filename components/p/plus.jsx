import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6tvq3b9g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6tvq3b9g"/>`,
		"fallback": "entypo:plus",
	});
}

export default Component;
