import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbe3urryc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbe3urryc"/>`,
		"fallback": "pinhead:slot",
	});
}

export default Component;
