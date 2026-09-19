import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx59awb4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx59awb4d"/>`,
		"fallback": "ion:ios-transgender",
	});
}

export default Component;
