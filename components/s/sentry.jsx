import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q26_qtrtc.css';

const viewBox = {"width":256,"height":227};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q26_qtrtc"/>`,
		"fallback": "thesvg-color:sentry",
	});
}

export default Component;
