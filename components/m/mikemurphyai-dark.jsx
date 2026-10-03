import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwtc_9b7s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwtc_9b7s"/>`,
		"fallback": "thesvg-color:mikemurphyai-dark",
	});
}

export default Component;
