import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4u40hb4r.css';
import '../../css/n/nvgbfybot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4u40hb4r"/><path class="nvgbfybot"/></g>`,
		"fallback": "tdesign:thumb-up-2",
	});
}

export default Component;
