import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9cgd7b2i.css';
import '../../css/l/l6i2g0zhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9cgd7b2i"/><path class="l6i2g0zhj"/></g>`,
		"fallback": "reicon:money-remove-filled",
	});
}

export default Component;
