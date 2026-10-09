import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wetq5b_1u.css';
import '../../css/d/d1j6p8b_k.css';
import '../../css/q/qqk1d6grf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wetq5b_1u"/><path class="d1j6p8b_k"/><path class="qqk1d6grf"/>`,
		"fallback": "energy-icons:table-20",
	});
}

export default Component;
