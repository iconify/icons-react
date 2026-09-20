import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/htginbf_n.css';
import '../../css/r/rc9uf2yax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="htginbf_n"/><path class="rc9uf2yax"/></g>`,
		"fallback": "streamline-ultimate:send-email-envelope",
	});
}

export default Component;
