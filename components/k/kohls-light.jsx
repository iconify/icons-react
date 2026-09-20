import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqm-erb8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqm-erb8p"/>`,
		"fallback": "selfhst:kohls-light",
	});
}

export default Component;
