import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tur3cnbyi.css';
import '../../css/p/p0a1_0m1u.css';
import '../../css/j/j_fd6lnam.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tur3cnbyi"/><path class="p0a1_0m1u"/><path class="j_fd6lnam"/></g>`,
		"fallback": "streamline:user-identifier-card",
	});
}

export default Component;
