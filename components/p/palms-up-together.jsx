import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf2picbgv.css';
import '../../css/s/sxkslcbhx.css';
import '../../css/z/z2eb_1biu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vf2picbgv"/><path class="sxkslcbhx"/><path class="z2eb_1biu"/></g>`,
		"fallback": "fluent-emoji-flat:palms-up-together",
	});
}

export default Component;
