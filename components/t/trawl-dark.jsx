import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytca5ac7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytca5ac7e"/>`,
		"fallback": "selfhst:trawl-dark",
	});
}

export default Component;
