import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf4aesbfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf4aesbfn"/>`,
		"fallback": "ion:md-flashlight",
	});
}

export default Component;
