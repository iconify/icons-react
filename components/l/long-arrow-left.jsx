import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bys7cd0-o.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bys7cd0-o"/>`,
		"fallback": "zmdi:long-arrow-left",
	});
}

export default Component;
