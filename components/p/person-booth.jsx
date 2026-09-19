import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5kp83b8c.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5kp83b8c"/>`,
		"fallback": "fa-solid:person-booth",
	});
}

export default Component;
