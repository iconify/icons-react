import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw2yiybqu.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw2yiybqu"/>`,
		"fallback": "fa:pause-circle-o",
	});
}

export default Component;
