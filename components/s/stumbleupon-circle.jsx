import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_wgz9s9o.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_wgz9s9o"/>`,
		"fallback": "fa:stumbleupon-circle",
	});
}

export default Component;
