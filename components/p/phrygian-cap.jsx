import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7x4lpb9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7x4lpb9f"/>`,
		"fallback": "game-icons:phrygian-cap",
	});
}

export default Component;
