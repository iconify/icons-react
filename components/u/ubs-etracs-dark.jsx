import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m14lmibdm.css';

const viewBox = {"width":1411,"height":1557};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m14lmibdm"/>`,
		"fallback": "thesvg-color:ubs-etracs-dark",
	});
}

export default Component;
