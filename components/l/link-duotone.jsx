import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s3eh8343i.css';
import '../../css/p/p-tkj3iok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s3eh8343i"/><path class="p-tkj3iok"/></g>`,
		"fallback": "reicon:link-duotone",
	});
}

export default Component;
