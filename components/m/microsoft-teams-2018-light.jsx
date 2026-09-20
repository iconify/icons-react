import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq1_-xbmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq1_-xbmj"/>`,
		"fallback": "selfhst:microsoft-teams-2018-light",
	});
}

export default Component;
