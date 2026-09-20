import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myfiu2y2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myfiu2y2g"/>`,
		"fallback": "selfhst:wally-light",
	});
}

export default Component;
