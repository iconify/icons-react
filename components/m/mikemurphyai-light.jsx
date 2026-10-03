import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epal7ia0t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epal7ia0t"/>`,
		"fallback": "thesvg-color:mikemurphyai-light",
	});
}

export default Component;
