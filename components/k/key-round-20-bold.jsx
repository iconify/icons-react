import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgp4x1bjw.css';
import '../../css/p/p16c5ccou.css';
import '../../css/x/x6y5_jb4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgp4x1bjw"/><path class="p16c5ccou"/><path class="x6y5_jb4k"/>`,
		"fallback": "energy-icons:key-round-20-bold",
	});
}

export default Component;
