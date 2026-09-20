import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqh74goup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqh74goup"/>`,
		"fallback": "selfhst:rancher-desktop-light",
	});
}

export default Component;
