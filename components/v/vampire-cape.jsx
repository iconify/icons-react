import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9v0nvb2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9v0nvb2i"/>`,
		"fallback": "game-icons:vampire-cape",
	});
}

export default Component;
