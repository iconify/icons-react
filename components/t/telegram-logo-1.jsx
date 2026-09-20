import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/ww-8_9b1r.css';
import '../../css/z/z5vx9tvlw.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ww-8_9b1r"/><path class="z5vx9tvlw"/><path class="j697l3uzc"/></g>`,
		"fallback": "streamline-logos:telegram-logo-1",
	});
}

export default Component;
