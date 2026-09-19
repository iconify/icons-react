import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoqiwp4op.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoqiwp4op"/>`,
		"fallback": "fxemoji:regionalindicatorr",
	});
}

export default Component;
