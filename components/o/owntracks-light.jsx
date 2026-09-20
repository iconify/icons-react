import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3qt8sbaz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3qt8sbaz"/>`,
		"fallback": "selfhst:owntracks-light",
	});
}

export default Component;
