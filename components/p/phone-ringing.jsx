import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzhz92pui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzhz92pui"/>`,
		"fallback": "tabler:phone-ringing",
	});
}

export default Component;
