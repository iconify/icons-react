import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo74jw5my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo74jw5my"/>`,
		"fallback": "nrk:spinner",
	});
}

export default Component;
