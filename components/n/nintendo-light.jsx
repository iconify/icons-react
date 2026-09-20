import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnfnpw1di.css';

const viewBox = {"width":405.1,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnfnpw1di"/>`,
		"fallback": "thesvg-color:nintendo-light",
	});
}

export default Component;
