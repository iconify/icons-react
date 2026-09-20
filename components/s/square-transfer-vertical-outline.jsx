import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whogh4bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whogh4bbr"/>`,
		"fallback": "solar:square-transfer-vertical-outline",
	});
}

export default Component;
