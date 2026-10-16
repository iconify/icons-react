import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kak06wnga.css';
import '../../css/z/z0454qbpn.css';
import '../../css/d/djxbnjbsd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kak06wnga"/><path class="z0454qbpn"/><path class="djxbnjbsd"/>`,
		"fallback": "energy-icons:tidal-lagoon-20-bold",
	});
}

export default Component;
