import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maed0_bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maed0_bcn"/>`,
		"fallback": "thesvg-color:octave",
	});
}

export default Component;
