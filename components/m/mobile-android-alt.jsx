import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlty2oa0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlty2oa0l"/>`,
		"fallback": "uil:mobile-android-alt",
	});
}

export default Component;
