import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_bozcl2u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_bozcl2u"/>`,
		"fallback": "dashicons:menu2",
	});
}

export default Component;
