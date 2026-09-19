import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlho3t-wi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlho3t-wi"/>`,
		"fallback": "icon-park-solid:tiktok",
	});
}

export default Component;
