import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueos75g2w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueos75g2w"/>`,
		"fallback": "memory:table-top-horizontal-rotate-clockwise",
	});
}

export default Component;
