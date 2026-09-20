import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0fo78b5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0fo78b5d"/>`,
		"fallback": "selfhst:nextdoor",
	});
}

export default Component;
