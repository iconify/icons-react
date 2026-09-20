import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yxeb9simy.css';
import '../../css/t/twg-mbk-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yxeb9simy"/><path class="twg-mbk-e"/></g>`,
		"fallback": "streamline-sharp:pen-tool",
	});
}

export default Component;
