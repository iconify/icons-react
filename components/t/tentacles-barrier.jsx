import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glxx8vb0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glxx8vb0s"/>`,
		"fallback": "game-icons:tentacles-barrier",
	});
}

export default Component;
