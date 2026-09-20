import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veh--ghsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veh--ghsq"/>`,
		"fallback": "selfhst:pixiv-light",
	});
}

export default Component;
