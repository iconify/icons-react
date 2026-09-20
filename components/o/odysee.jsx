import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgiol0bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgiol0bhp"/>`,
		"fallback": "thesvg:odysee",
	});
}

export default Component;
