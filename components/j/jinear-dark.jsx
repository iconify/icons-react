import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu8j9_fgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu8j9_fgj"/>`,
		"fallback": "selfhst:jinear-dark",
	});
}

export default Component;
