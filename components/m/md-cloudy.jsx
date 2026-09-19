import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4xyx_bsy.css';
import '../../css/t/tkzh8yb2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4xyx_bsy"/><path class="tkzh8yb2s"/>`,
		"fallback": "ion:md-cloudy",
	});
}

export default Component;
