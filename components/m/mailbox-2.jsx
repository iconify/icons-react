import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hc45gi6aw.css';
import '../../css/q/qtqoj9bun.css';
import '../../css/u/u8ukx9bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hc45gi6aw"/><path class="qtqoj9bun"/><path class="u8ukx9bdj"/></g>`,
		"fallback": "streamline-cyber:mailbox-2",
	});
}

export default Component;
