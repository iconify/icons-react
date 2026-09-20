import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqh7--bxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqh7--bxy"/>`,
		"fallback": "selfhst:microsoft-word-2013-light",
	});
}

export default Component;
