import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nicmf8b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nicmf8b5e"/>`,
		"fallback": "tabler:navigation-cancel",
	});
}

export default Component;
