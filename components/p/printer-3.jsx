import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c6ov3abct.css';
import '../../css/f/f3edoy8ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="c6ov3abct"/><path class="f3edoy8ki"/></g>`,
		"fallback": "streamline-cyber:printer-3",
	});
}

export default Component;
