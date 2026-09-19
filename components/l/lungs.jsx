import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewz5f2lft.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewz5f2lft"/>`,
		"fallback": "fa6-solid:lungs",
	});
}

export default Component;
