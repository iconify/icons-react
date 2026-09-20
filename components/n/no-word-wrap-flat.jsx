import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuy7impgh.css';
import '../../css/w/wgu_5sbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuy7impgh"/><path clip-rule="evenodd" class="wgu_5sbxg"/></g>`,
		"fallback": "streamline-sharp-color:no-word-wrap-flat",
	});
}

export default Component;
