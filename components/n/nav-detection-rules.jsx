import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0tz_5blg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0tz_5blg"/>`,
		"fallback": "oui:nav-detection-rules",
	});
}

export default Component;
