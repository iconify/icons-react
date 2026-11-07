import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udz5nqb7v.css';
import '../../css/k/kdob9slbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udz5nqb7v"/><path class="kdob9slbu"/>`,
		"fallback": "solar:pip-bold-duotone",
	});
}

export default Component;
