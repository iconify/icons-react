import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exhi5mgfk.css';
import '../../css/l/lwaghdcuu.css';
import '../../css/t/tts7bccxu.css';
import '../../css/q/qsduqvxyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exhi5mgfk"/><path class="lwaghdcuu"/><path class="tts7bccxu"/><path class="qsduqvxyk"/></g>`,
		"fallback": "streamline-ultimate-color:module-four",
	});
}

export default Component;
