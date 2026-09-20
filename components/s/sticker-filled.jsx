import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfqtpigme.css';
import '../../css/c/c1ly_17gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vfqtpigme"/><path class="c1ly_17gg"/></g>`,
		"fallback": "reicon:sticker-filled",
	});
}

export default Component;
