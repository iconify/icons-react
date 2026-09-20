import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qel2rxb7z.css';
import '../../css/c/crnjs2bwb.css';
import '../../css/u/ueez6xb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qel2rxb7z"/><path class="crnjs2bwb"/><path class="ueez6xb7t"/></g>`,
		"fallback": "solar:watch-round-bold",
	});
}

export default Component;
