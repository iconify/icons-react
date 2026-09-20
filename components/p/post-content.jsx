import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icyvf5brz.css';
import '../../css/b/bfueulvzi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icyvf5brz"/><path class="bfueulvzi"/>`,
		"fallback": "selfhst:post-content",
	});
}

export default Component;
