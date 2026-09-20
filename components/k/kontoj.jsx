import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agda5ibxs.css';
import '../../css/d/dp3eanaee.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agda5ibxs"/><path class="dp3eanaee"/>`,
		"fallback": "selfhst:kontoj",
	});
}

export default Component;
