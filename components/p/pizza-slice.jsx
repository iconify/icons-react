import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue4bdsbvu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue4bdsbvu"/>`,
		"fallback": "fa7-solid:pizza-slice",
	});
}

export default Component;
