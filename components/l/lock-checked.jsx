import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5r02k1wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5r02k1wm"/>`,
		"fallback": "tdesign:lock-checked",
	});
}

export default Component;
