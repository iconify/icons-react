import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-ay5zbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-ay5zbdk"/>`,
		"fallback": "uil:top-arrow-to-top",
	});
}

export default Component;
