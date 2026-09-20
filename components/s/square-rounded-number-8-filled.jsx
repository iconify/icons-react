import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioza19b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioza19b7o"/>`,
		"fallback": "tabler:square-rounded-number-8-filled",
	});
}

export default Component;
