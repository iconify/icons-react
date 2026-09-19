import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu77ymb3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu77ymb3y"/>`,
		"fallback": "cil:media-skip-forward",
	});
}

export default Component;
