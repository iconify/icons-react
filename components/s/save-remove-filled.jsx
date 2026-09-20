import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3tf-nwmj.css';
import '../../css/a/a58yn5bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y3tf-nwmj"/><path class="a58yn5bap"/></g>`,
		"fallback": "reicon:save-remove-filled",
	});
}

export default Component;
