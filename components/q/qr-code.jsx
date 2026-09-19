import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa_146bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa_146bey"/>`,
		"fallback": "iconoir:qr-code",
	});
}

export default Component;
