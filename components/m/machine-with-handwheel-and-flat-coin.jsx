import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pce7ff9sr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pce7ff9sr"/>`,
		"fallback": "pinhead:machine-with-handwheel-and-flat-coin",
	});
}

export default Component;
