import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq942zelc.css';
import '../../css/h/h0p5ptx6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq942zelc"/><path class="h0p5ptx6u"/>`,
		"fallback": "mage:robot-screen-fill",
	});
}

export default Component;
