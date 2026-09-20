import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qym-qrooz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qym-qrooz"/>`,
		"fallback": "selfhst:microsoft-teams-2016-dark",
	});
}

export default Component;
