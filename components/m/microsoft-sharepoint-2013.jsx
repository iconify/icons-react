import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvvawqb8a.css';
import '../../css/w/w5esiwvtl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvvawqb8a"/><path class="w5esiwvtl"/>`,
		"fallback": "selfhst:microsoft-sharepoint-2013",
	});
}

export default Component;
