import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-e7r8qso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-e7r8qso"/>`,
		"fallback": "lucide:message-circle-x",
	});
}

export default Component;
