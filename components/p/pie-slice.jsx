import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byzxr3b7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byzxr3b7x"/>`,
		"fallback": "game-icons:pie-slice",
	});
}

export default Component;
