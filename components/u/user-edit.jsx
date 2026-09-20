import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7yf92x6w.css';
import '../../css/u/up0w2tbhi.css';
import '../../css/m/mqe2c4b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g7yf92x6w"/><path class="up0w2tbhi"/><path clip-rule="evenodd" class="mqe2c4b7q"/></g>`,
		"fallback": "reicon:user-edit",
	});
}

export default Component;
