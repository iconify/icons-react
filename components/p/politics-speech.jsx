import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9n8s9yzc.css';
import '../../css/s/s28t97b1i.css';
import '../../css/o/ozkqvubnt.css';
import '../../css/t/ttvacacma.css';
import '../../css/e/ekrqtg6xg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r9n8s9yzc"/><path class="s28t97b1i"/><path class="ozkqvubnt"/><path class="ttvacacma"/><path class="ekrqtg6xg"/></g>`,
		"fallback": "streamline-color:politics-speech",
	});
}

export default Component;
