import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj98ljgyw.css';
import '../../css/y/yw3dmeumf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj98ljgyw"/><path class="yw3dmeumf"/>`,
		"fallback": "ion:ios-save",
	});
}

export default Component;
