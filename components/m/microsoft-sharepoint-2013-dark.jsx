import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwkk4acjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwkk4acjo"/>`,
		"fallback": "selfhst:microsoft-sharepoint-2013-dark",
	});
}

export default Component;
