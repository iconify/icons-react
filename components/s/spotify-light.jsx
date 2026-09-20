import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eil_4ybnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eil_4ybnm"/>`,
		"fallback": "selfhst:spotify-light",
	});
}

export default Component;
