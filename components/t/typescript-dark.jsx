import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqesmkh4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqesmkh4k"/>`,
		"fallback": "selfhst:typescript-dark",
	});
}

export default Component;
