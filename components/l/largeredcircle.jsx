import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myy2k-mkz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="myy2k-mkz"/>`,
		"fallback": "fxemoji:largeredcircle",
	});
}

export default Component;
