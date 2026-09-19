import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5cimwbxh.css';
import '../../css/m/mnxsi_e-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5cimwbxh"/><path class="mnxsi_e-u"/>`,
		"fallback": "ion:ios-rocket",
	});
}

export default Component;
