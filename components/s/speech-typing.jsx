import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pknad4usr.css';
import '../../css/z/zdpovwbgv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="pknad4usr"/><path class="zdpovwbgv"/></g>`,
		"fallback": "system-uicons:speech-typing",
	});
}

export default Component;
