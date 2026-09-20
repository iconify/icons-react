import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czmi4cb5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czmi4cb5m"/>`,
		"fallback": "selfhst:pangolin-light",
	});
}

export default Component;
