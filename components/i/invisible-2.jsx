import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh554tb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh554tb9x"/>`,
		"fallback": "streamline-sharp:invisible-2",
	});
}

export default Component;
