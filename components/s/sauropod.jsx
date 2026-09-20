import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2xoc41wx.css';
import '../../css/q/qkuiptbxn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2xoc41wx"/><path class="qkuiptbxn"/>`,
		"fallback": "openmoji:sauropod",
	});
}

export default Component;
