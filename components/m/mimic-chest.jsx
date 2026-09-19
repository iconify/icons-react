import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhqy3-bgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhqy3-bgt"/>`,
		"fallback": "game-icons:mimic-chest",
	});
}

export default Component;
