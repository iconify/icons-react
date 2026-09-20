import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrv93sx0w.css';
import '../../css/s/s05pp5e4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qrv93sx0w"/><path clip-rule="evenodd" class="s05pp5e4d"/></g>`,
		"fallback": "reicon:ufo3",
	});
}

export default Component;
