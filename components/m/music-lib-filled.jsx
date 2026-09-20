import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s3xsa2b9s.css';
import '../../css/m/ml9jcl9xy.css';
import '../../css/y/yrdyw7tff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s3xsa2b9s"/><path clip-rule="evenodd" class="ml9jcl9xy"/><path class="yrdyw7tff"/></g>`,
		"fallback": "reicon:music-lib-filled",
	});
}

export default Component;
