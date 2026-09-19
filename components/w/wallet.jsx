import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9loqrvgk.css';
import '../../css/t/tmh83rwbo.css';
import '../../css/p/p97oy8mpb.css';

const viewBox = {"width":38,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9loqrvgk"/><path class="tmh83rwbo"/><circle class="p97oy8mpb"/></g>`,
		"fallback": "et:wallet",
	});
}

export default Component;
