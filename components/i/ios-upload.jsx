import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y03fodbhj.css';
import '../../css/z/z-rhwwb-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y03fodbhj"/><path class="z-rhwwb-y"/>`,
		"fallback": "ion:ios-upload",
	});
}

export default Component;
