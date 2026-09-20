import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/al97k0iyn.css';
import '../../css/l/l-k9wbbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="al97k0iyn"/><path class="l-k9wbbin"/></g>`,
		"fallback": "streamline-sharp:transfer-truck-time",
	});
}

export default Component;
