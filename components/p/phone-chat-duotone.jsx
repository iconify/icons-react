import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohxe05aho.css';
import '../../css/o/onyno6b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ohxe05aho"/><path class="onyno6b9s"/></g>`,
		"fallback": "reicon:phone-chat-duotone",
	});
}

export default Component;
