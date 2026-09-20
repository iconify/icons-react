import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e78tupbmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e78tupbmw"/>`,
		"fallback": "selfhst:microsoft-teams-2018-dark",
	});
}

export default Component;
