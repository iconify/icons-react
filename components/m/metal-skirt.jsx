import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdtwck09f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdtwck09f"/>`,
		"fallback": "game-icons:metal-skirt",
	});
}

export default Component;
