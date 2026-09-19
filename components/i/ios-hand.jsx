import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6ec88-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz6ec88-u"/>`,
		"fallback": "ion:ios-hand",
	});
}

export default Component;
