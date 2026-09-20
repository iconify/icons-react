import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aul0jfv-r.css';
import '../../css/u/ut554nzkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aul0jfv-r"/><path class="ut554nzkt"/></g>`,
		"fallback": "streamline-sharp:user-identifier-card",
	});
}

export default Component;
