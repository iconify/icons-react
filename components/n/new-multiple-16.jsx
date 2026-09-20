import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzr5rdboi.css';
import '../../css/v/vajfkwctv.css';
import '../../css/f/fp4n9byjm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzr5rdboi"/><path clip-rule="evenodd" class="vajfkwctv"/><path class="fp4n9byjm"/>`,
		"fallback": "qlementine-icons:new-multiple-16",
	});
}

export default Component;
