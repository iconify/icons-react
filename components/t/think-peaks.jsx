import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_660sb8w.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_660sb8w"/>`,
		"fallback": "fa-brands:think-peaks",
	});
}

export default Component;
