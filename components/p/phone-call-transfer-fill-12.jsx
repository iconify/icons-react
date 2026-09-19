import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo7_onhnc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo7_onhnc"/>`,
		"fallback": "garden:phone-call-transfer-fill-12",
	});
}

export default Component;
