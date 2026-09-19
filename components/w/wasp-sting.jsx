import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rukyg-b5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rukyg-b5i"/>`,
		"fallback": "game-icons:wasp-sting",
	});
}

export default Component;
