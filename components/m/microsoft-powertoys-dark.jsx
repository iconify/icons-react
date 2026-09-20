import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn776wbmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn776wbmh"/>`,
		"fallback": "selfhst:microsoft-powertoys-dark",
	});
}

export default Component;
