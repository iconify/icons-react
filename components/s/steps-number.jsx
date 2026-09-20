import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3f20yb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3f20yb_s"/>`,
		"fallback": "streamline-sharp-color:steps-number",
	});
}

export default Component;
