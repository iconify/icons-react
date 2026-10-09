import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk9dwyb2u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk9dwyb2u"/>`,
		"fallback": "energy-icons:person-20-bold",
	});
}

export default Component;
