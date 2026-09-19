import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z62-w0m7e.css';
import '../../css/l/l47wg2bol.css';
import '../../css/m/mubrohbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z62-w0m7e"/><path class="l47wg2bol"/><path class="mubrohbof"/>`,
		"fallback": "boxicons:rainbow",
	});
}

export default Component;
