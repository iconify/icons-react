import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7_67ke_d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7_67ke_d"/>`,
		"fallback": "zondicons:star-full",
	});
}

export default Component;
