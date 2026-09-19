import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/z3k1ilbix.css';
import '../../css/z/zx_6j6b3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="z3k1ilbix"/><path class="zx_6j6b3b"/></g>`,
		"fallback": "icon-park-solid:voicemail",
	});
}

export default Component;
