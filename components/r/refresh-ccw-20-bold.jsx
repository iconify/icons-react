import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv5tshbbx.css';
import '../../css/b/b7nj-761u.css';
import '../../css/n/ndokbv5ou.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv5tshbbx"/><path class="b7nj-761u"/><path class="ndokbv5ou"/>`,
		"fallback": "energy-icons:refresh-ccw-20-bold",
	});
}

export default Component;
