import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auxtlzq1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auxtlzq1h"/>`,
		"fallback": "selfhst:sponsorblock-light",
	});
}

export default Component;
