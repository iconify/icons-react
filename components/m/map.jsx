import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kdvifpbwd.css';
import '../../css/i/in-i3gb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kdvifpbwd"/><path class="in-i3gb3w"/></g>`,
		"fallback": "akar-icons:map",
	});
}

export default Component;
