import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1xbai7pj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1xbai7pj"/>`,
		"fallback": "selfhst:onetime-secret-light",
	});
}

export default Component;
