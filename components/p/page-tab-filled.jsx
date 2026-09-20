import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh13jvbja.css';
import '../../css/m/mdi0c_bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh13jvbja"/><path class="mdi0c_bip"/>`,
		"fallback": "tdesign:page-tab-filled",
	});
}

export default Component;
