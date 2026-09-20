import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6rt4ncrj.css';
import '../../css/q/qoxmzibkw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6rt4ncrj"/><path class="qoxmzibkw"/></g>`,
		"fallback": "streamline-color:voice-mail-off",
	});
}

export default Component;
