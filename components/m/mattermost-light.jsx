import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wme-6xfcs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wme-6xfcs"/>`,
		"fallback": "selfhst:mattermost-light",
	});
}

export default Component;
