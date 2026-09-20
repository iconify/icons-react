import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbdkh698b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbdkh698b"/>`,
		"fallback": "tdesign:navigation-arrow-filled",
	});
}

export default Component;
