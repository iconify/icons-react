import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gerfyjb8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gerfyjb8y"/>`,
		"fallback": "game-icons:watermelon",
	});
}

export default Component;
