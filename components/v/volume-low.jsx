import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojw0e_9cg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojw0e_9cg"/>`,
		"fallback": "memory:volume-low",
	});
}

export default Component;
