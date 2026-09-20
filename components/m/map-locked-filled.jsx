import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noywm2ubs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noywm2ubs"/>`,
		"fallback": "tdesign:map-locked-filled",
	});
}

export default Component;
