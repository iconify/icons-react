import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5r0_vb_l.css';
import '../../css/b/bn7oupkej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5r0_vb_l"/><path class="bn7oupkej"/>`,
		"fallback": "garden:palette-stroke-20",
	});
}

export default Component;
