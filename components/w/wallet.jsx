import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/temcgjo4q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="temcgjo4q"/>`,
		"fallback": "entypo:wallet",
	});
}

export default Component;
