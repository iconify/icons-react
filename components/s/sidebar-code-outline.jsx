import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc6nhhbik.css';
import '../../css/i/i0n9u8biz.css';
import '../../css/x/x3bg3uy2c.css';
import '../../css/a/a9mvgcnyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vc6nhhbik"/><path class="i0n9u8biz"/><path class="x3bg3uy2c"/><path clip-rule="evenodd" class="a9mvgcnyo"/></g>`,
		"fallback": "solar:sidebar-code-outline",
	});
}

export default Component;
