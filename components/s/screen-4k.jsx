import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byhi3osvb.css';
import '../../css/q/q37vh1bci.css';
import '../../css/w/wkinp6b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byhi3osvb"/><path class="q37vh1bci"/><path class="wkinp6b9u"/></g>`,
		"fallback": "tdesign:screen-4k",
	});
}

export default Component;
