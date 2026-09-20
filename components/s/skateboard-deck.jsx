import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe1f4abji.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe1f4abji"/>`,
		"fallback": "pinhead:skateboard-deck",
	});
}

export default Component;
