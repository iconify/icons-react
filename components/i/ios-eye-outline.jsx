import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4ba3tqnk.css';
import '../../css/z/z5kklv8jo.css';
import '../../css/a/agjlaub_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4ba3tqnk"/><path class="z5kklv8jo"/><path class="agjlaub_x"/>`,
		"fallback": "ion:ios-eye-outline",
	});
}

export default Component;
