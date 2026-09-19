import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzjrggn2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzjrggn2d"/>`,
		"fallback": "game-icons:sunflower",
	});
}

export default Component;
