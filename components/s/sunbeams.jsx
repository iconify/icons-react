import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-y3ywbff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-y3ywbff"/>`,
		"fallback": "game-icons:sunbeams",
	});
}

export default Component;
