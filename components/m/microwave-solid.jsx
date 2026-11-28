import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqt3-pbhy.css';
import '../../css/o/o_o_ezbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oqt3-pbhy"/><path class="o_o_ezbzj"/></g>`,
		"fallback": "iconaut:microwave-solid",
	});
}

export default Component;
