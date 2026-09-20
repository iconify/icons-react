import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkgnmvqjs.css';
import '../../css/q/qxlpaybyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkgnmvqjs"/><path class="qxlpaybyd"/>`,
		"fallback": "pixel:user-headset",
	});
}

export default Component;
