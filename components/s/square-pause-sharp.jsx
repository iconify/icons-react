import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffa99lb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffa99lb1d"/>`,
		"fallback": "keyline-icons:square-pause-sharp",
	});
}

export default Component;
