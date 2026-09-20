import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxm_88f5i.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxm_88f5i"/>`,
		"fallback": "memory:table-top-vertical-stairs-ascend-up",
	});
}

export default Component;
