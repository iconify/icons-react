import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sy6d7r2rm.css';
import '../../css/s/s3fa5fbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sy6d7r2rm"/><path class="s3fa5fbte"/></g>`,
		"fallback": "reicon:scale2-duotone",
	});
}

export default Component;
