import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9q7yj8re.css';
import '../../css/z/zmi5qjbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b9q7yj8re"/><path class="zmi5qjbqz"/></g>`,
		"fallback": "nrk:media-chromecast-3",
	});
}

export default Component;
