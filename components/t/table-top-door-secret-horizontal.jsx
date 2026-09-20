import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gekxk_31h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gekxk_31h"/>`,
		"fallback": "memory:table-top-door-secret-horizontal",
	});
}

export default Component;
