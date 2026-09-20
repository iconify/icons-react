import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/jocbbub7e.css';
import '../../css/u/uqgm3l8gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="jocbbub7e"/><path class="uqgm3l8gc"/></g>`,
		"fallback": "streamline-cyber:lady",
	});
}

export default Component;
