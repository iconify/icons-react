import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vel8po25y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vel8po25y"/>`,
		"fallback": "game-icons:reptile-tail",
	});
}

export default Component;
