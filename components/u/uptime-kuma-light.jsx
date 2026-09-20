import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvq1iklbg.css';

const viewBox = {"width":622,"height":622};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvq1iklbg"/>`,
		"fallback": "selfhst:uptime-kuma-light",
	});
}

export default Component;
