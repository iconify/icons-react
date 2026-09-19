import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn_cz7bgl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn_cz7bgl"/>`,
		"fallback": "fa7-solid:tornado",
	});
}

export default Component;
