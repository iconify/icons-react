import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8u_tug-u.css';

const viewBox = {"width":1411,"height":1557};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8u_tug-u"/>`,
		"fallback": "thesvg-color:ubs-etracs-light",
	});
}

export default Component;
