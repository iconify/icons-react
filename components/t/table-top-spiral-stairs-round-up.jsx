import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb521_b-x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb521_b-x"/>`,
		"fallback": "memory:table-top-spiral-stairs-round-up",
	});
}

export default Component;
