import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rpsqpab2z.css';
import '../../css/p/p75tynpyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="rpsqpab2z"/><path class="p75tynpyq"/></g>`,
		"fallback": "streamline-cyber:reply-all",
	});
}

export default Component;
