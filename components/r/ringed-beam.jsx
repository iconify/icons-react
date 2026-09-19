import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr7k__z1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr7k__z1v"/>`,
		"fallback": "game-icons:ringed-beam",
	});
}

export default Component;
