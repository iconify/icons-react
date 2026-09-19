import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1j8od6ti.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1j8od6ti"/>`,
		"fallback": "entypo:magnifying-glass",
	});
}

export default Component;
