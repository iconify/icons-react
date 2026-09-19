import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcdue44-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcdue44-m"/>`,
		"fallback": "game-icons:metal-boot",
	});
}

export default Component;
