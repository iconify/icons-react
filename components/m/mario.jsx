import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ydeoklbzb.css';
import '../../css/e/emumhxblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ydeoklbzb"/><path class="emumhxblo"/></g>`,
		"fallback": "streamline-cyber:mario",
	});
}

export default Component;
