import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyhfl9ybx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyhfl9ybx"/>`,
		"fallback": "selfhst:motioneye-dark",
	});
}

export default Component;
