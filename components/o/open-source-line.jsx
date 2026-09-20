import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr3w9-lmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr3w9-lmt"/>`,
		"fallback": "ri:open-source-line",
	});
}

export default Component;
