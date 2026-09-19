import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mro1i2bzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mro1i2bzn"/>`,
		"fallback": "game-icons:vitruvian-man",
	});
}

export default Component;
