import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otb_05e1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otb_05e1x"/>`,
		"fallback": "mdi:tilde-off",
	});
}

export default Component;
