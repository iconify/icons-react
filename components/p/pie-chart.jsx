import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7_z5867f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7_z5867f"/>`,
		"fallback": "game-icons:pie-chart",
	});
}

export default Component;
