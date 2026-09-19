import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a01f0rssn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a01f0rssn"/>`,
		"fallback": "cbi:nanoleaf-holiday-string",
	});
}

export default Component;
