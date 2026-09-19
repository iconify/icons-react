import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hw1i7jbek.css';
import '../../css/q/qrq97hb_x.css';
import '../../css/y/y59_euhgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hw1i7jbek"/><path class="qrq97hb_x"/><path class="y59_euhgv"/></g>`,
		"fallback": "fluent-emoji-flat:locked-with-key",
	});
}

export default Component;
