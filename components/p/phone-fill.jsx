import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs73smyvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs73smyvt"/>`,
		"fallback": "keyline-icons:phone-fill",
	});
}

export default Component;
