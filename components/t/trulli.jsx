import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xqznafu2t.css';
import '../../css/s/s2rco2s5i.css';
import '../../css/g/g5bfogrxx.css';
import '../../css/q/q5y5tebdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xqznafu2t"/><path class="s2rco2s5i"/><path class="g5bfogrxx"/><path class="q5y5tebdx"/></g>`,
		"fallback": "hugeicons:trulli",
	});
}

export default Component;
