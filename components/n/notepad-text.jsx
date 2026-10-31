import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q-ckkssuv.css';
import '../../css/w/wvzk8ujng.css';
import '../../css/u/uylg6bcvj.css';
import '../../css/f/fd6pd66bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="q-ckkssuv"/><path class="wm-shine wvzk8ujng"/><path class="uylg6bcvj wm-k"/><path class="fd6pd66bu wm-a"/></g>`,
		"fallback": "withicons-kawaii:notepad-text",
	});
}

export default Component;
