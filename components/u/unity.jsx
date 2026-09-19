import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb52r_b0n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb52r_b0n"/>`,
		"fallback": "bi:unity",
	});
}

export default Component;
