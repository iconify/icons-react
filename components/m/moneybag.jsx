import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxnzi-byq.css';
import '../../css/d/dmwskda3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxnzi-byq"/><path class="dmwskda3p"/>`,
		"fallback": "fxemoji:moneybag",
	});
}

export default Component;
