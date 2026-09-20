import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msru_bb0h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msru_bb0h"/>`,
		"fallback": "selfhst:swarmpit-dark",
	});
}

export default Component;
