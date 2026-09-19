import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/styyr0ojb.css';
import '../../css/x/xbnh1mz5u.css';
import '../../css/v/vkj5f5qja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="styyr0ojb"/><path class="xbnh1mz5u"/><path class="vkj5f5qja"/></g>`,
		"fallback": "hugeicons:mail-voice-01",
	});
}

export default Component;
