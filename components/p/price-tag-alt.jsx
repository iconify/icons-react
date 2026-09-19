import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoz51dbyx.css';
import '../../css/r/r_b7lhsan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoz51dbyx"/><path class="r_b7lhsan"/>`,
		"fallback": "boxicons:price-tag-alt",
	});
}

export default Component;
