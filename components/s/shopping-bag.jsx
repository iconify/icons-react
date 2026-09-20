import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acc2ezl_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acc2ezl_d"/>`,
		"fallback": "pinhead:shopping-bag",
	});
}

export default Component;
