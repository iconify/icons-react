import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg8nhebwc.css';

const viewBox = {"width":448,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg8nhebwc"/>`,
		"fallback": "zmdi:long-arrow-tab",
	});
}

export default Component;
