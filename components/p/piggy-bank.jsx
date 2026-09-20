import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c4gl01lyl.css';
import '../../css/f/fdamxh10z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="c4gl01lyl"/><path class="fdamxh10z"/></g>`,
		"fallback": "streamline-cyber:piggy-bank",
	});
}

export default Component;
