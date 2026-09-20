import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgfyvbb5e.css';
import '../../css/u/ud8i2ab-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgfyvbb5e"/><path class="ud8i2ab-a"/>`,
		"fallback": "vaadin:reply-all",
	});
}

export default Component;
