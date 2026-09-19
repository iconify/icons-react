import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r11mf4_ss.css';
import '../../css/y/ydudqy-kh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r11mf4_ss"/><path class="ydudqy-kh"/>`,
		"fallback": "ion:magnet-sharp",
	});
}

export default Component;
