import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/grc9tmbtv.css';
import '../../css/q/qi-z61bjd.css';
import '../../css/g/goueu-bkx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="grc9tmbtv"/><path clip-rule="evenodd" class="qi-z61bjd"/><path clip-rule="evenodd" class="goueu-bkx"/></g>`,
		"fallback": "glyphs:user-circle-bold",
	});
}

export default Component;
