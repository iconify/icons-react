import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suxwajh7t.css';
import '../../css/h/hky_roj3c.css';
import '../../css/u/ur91l0baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="warning-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="suxwajh7t"/><path class="hky_roj3c"/><path clip-rule="evenodd" class="ur91l0baa"/></g></g>`,
		"fallback": "cuida:warning-outline",
	});
}

export default Component;
