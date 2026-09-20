import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uan11fboz.css';
import '../../css/n/ng3jq3bxr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uan11fboz"/><path class="ng3jq3bxr"/>`,
		"fallback": "selfhst:luna-dashboard",
	});
}

export default Component;
