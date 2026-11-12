import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q66omwb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q66omwb3e"/>`,
		"fallback": "selfhst:microsoft-sharepoint-2013-light",
	});
}

export default Component;
