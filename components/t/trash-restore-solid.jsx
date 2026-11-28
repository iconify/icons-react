import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aeryvccvv.css';
import '../../css/l/lutbgcatj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aeryvccvv"/><path class="lutbgcatj"/></g>`,
		"fallback": "iconaut:trash-restore-solid",
	});
}

export default Component;
