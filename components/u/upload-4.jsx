import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu14mdo9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu14mdo9u"/>`,
		"fallback": "subway:upload-4",
	});
}

export default Component;
