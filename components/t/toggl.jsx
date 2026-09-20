import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlol_h0gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlol_h0gm"/>`,
		"fallback": "simple-icons:toggl",
	});
}

export default Component;
