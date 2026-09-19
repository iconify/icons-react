import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghifkj0an.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghifkj0an"/>`,
		"fallback": "game-icons:tire-iron-cross",
	});
}

export default Component;
