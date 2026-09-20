import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk88vbcns.css';
import '../../css/y/yqyu1nbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mk88vbcns"/><path class="yqyu1nbbp"/></g>`,
		"fallback": "tdesign:microphone-1",
	});
}

export default Component;
