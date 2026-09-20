import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc9xcibsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc9xcibsq"/>`,
		"fallback": "selfhst:languagetool-light",
	});
}

export default Component;
