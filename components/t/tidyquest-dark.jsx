import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7-r17bww.css';
import '../../css/e/eyfhqgb-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7-r17bww"/><path class="eyfhqgb-h"/>`,
		"fallback": "selfhst:tidyquest-dark",
	});
}

export default Component;
