import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bohns_bdo.css';
import '../../css/m/m7fla6che.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bohns_bdo"/><path class="m7fla6che"/></g>`,
		"fallback": "fluent-emoji-high-contrast:label",
	});
}

export default Component;
