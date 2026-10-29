import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jffir3tnu.css';
import '../../css/s/sx4h3cbfw.css';
import '../../css/r/r8_j-9bks.css';
import '../../css/z/zr33d1b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jffir3tnu"/><path class="sx4h3cbfw wm-a"/><path class="r8_j-9bks wm-a"/><path class="wm-s zr33d1b2c"/></g>`,
		"fallback": "withicons:love-letter",
	});
}

export default Component;
