import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3cuan7wn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3cuan7wn"/>`,
		"fallback": "game-icons:trilobite",
	});
}

export default Component;
