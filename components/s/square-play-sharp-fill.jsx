import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhth5obrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fhth5obrt"/>`,
		"fallback": "keyline-icons:square-play-sharp-fill",
	});
}

export default Component;
