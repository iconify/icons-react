import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgzn514zn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgzn514zn"/>`,
		"fallback": "selfhst:norish",
	});
}

export default Component;
