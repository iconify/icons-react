import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swevlxb4e.css';
import '../../css/h/hgy1l_tlx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swevlxb4e"/><path class="hgy1l_tlx"/>`,
		"fallback": "energy-icons:plus-20-bold",
	});
}

export default Component;
