import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc1by1b0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc1by1b0j"/>`,
		"fallback": "dashicons:printer",
	});
}

export default Component;
