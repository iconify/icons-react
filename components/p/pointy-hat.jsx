import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4za4obho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4za4obho"/>`,
		"fallback": "game-icons:pointy-hat",
	});
}

export default Component;
