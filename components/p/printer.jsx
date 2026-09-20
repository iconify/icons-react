import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntho9dxzt.css';
import '../../css/l/l08oyi90u.css';
import '../../css/a/ac6xbtk3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ntho9dxzt"/><path class="l08oyi90u"/><path class="ac6xbtk3v"/></g>`,
		"fallback": "pixelarticons:printer",
	});
}

export default Component;
