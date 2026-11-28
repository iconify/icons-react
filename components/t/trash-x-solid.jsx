import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxrezzt9x.css';
import '../../css/l/lutbgcatj.css';
import '../../css/s/smbbhfb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wxrezzt9x"/><path class="lutbgcatj"/><path class="smbbhfb1w"/></g>`,
		"fallback": "iconaut:trash-x-solid",
	});
}

export default Component;
