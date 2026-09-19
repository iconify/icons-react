import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir2o0ybbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir2o0ybbc"/>`,
		"fallback": "game-icons:resize",
	});
}

export default Component;
