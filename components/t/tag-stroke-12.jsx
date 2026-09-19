import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5bbp6dej.css';
import '../../css/e/e7ba03bxw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5bbp6dej"/><circle class="e7ba03bxw"/>`,
		"fallback": "garden:tag-stroke-12",
	});
}

export default Component;
