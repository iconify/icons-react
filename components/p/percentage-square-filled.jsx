import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc975zb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc975zb1h"/>`,
		"fallback": "reicon:percentage-square-filled",
	});
}

export default Component;
