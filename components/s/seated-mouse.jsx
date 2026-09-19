import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7wjn1b-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7wjn1b-e"/>`,
		"fallback": "game-icons:seated-mouse",
	});
}

export default Component;
