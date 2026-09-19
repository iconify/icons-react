import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpc4d_bkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpc4d_bkj"/>`,
		"fallback": "game-icons:swan",
	});
}

export default Component;
