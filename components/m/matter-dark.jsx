import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rod79qbyt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rod79qbyt"/>`,
		"fallback": "selfhst:matter-dark",
	});
}

export default Component;
