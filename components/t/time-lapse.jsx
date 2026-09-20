import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrz8f4stt.css';
import '../../css/i/iida3r18d.css';
import '../../css/f/fq0cay4ud.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vrz8f4stt"/><path class="iida3r18d"/><path class="fq0cay4ud"/></g>`,
		"fallback": "streamline-flex-color:time-lapse",
	});
}

export default Component;
