import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/recl8bc8n.css';
import '../../css/x/xiag7jvar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="recl8bc8n"/><path clip-rule="evenodd" class="xiag7jvar"/></g>`,
		"fallback": "reicon:percent-tag",
	});
}

export default Component;
