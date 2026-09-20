import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s42bbq7uz.css';
import '../../css/d/do2_d_k7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s42bbq7uz"/><path class="do2_d_k7w"/>`,
		"fallback": "selfhst:visible-by-verizon",
	});
}

export default Component;
