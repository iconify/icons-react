import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btiw_o-yn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btiw_o-yn"/>`,
		"fallback": "selfhst:omnom-dark",
	});
}

export default Component;
