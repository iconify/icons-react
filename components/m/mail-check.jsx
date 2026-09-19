import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gg0vscaao.css';
import '../../css/o/og35zhwuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gg0vscaao"/><path class="og35zhwuu"/></g>`,
		"fallback": "hugeicons:mail-check",
	});
}

export default Component;
